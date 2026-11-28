import { ref, reactive, onMounted, onBeforeUnmount, watch } from 'vue'
import emailjs from '@emailjs/browser'
import { useTheme } from '@/composables/useTheme'

export function useContactForm({ serviceId, templateId, publicKey, turnstileSiteKey }) {
  const { isDark } = useTheme()
  const turnstileContainer = ref(null)
  const turnstileToken = ref('')
  const formState = ref('idle')

  const form = reactive({ name: '', email: '', message: '' })
  const errors = reactive({ name: '', email: '', message: '', turnstile: '' })

  let turnstileInterval
  let widgetId = null

  function renderTurnstile() {
    if (!window.turnstile || !turnstileContainer.value || !turnstileSiteKey) return
    if (widgetId !== null) {
      try {
        window.turnstile.remove(widgetId)
      } catch {
        // Ignore if widget is already unmounted
      }
      widgetId = null
    }
    turnstileToken.value = ''
    widgetId = window.turnstile.render(turnstileContainer.value, {
      sitekey: turnstileSiteKey,
      theme: isDark.value ? 'dark' : 'light',
      size: typeof window !== 'undefined' && window.innerWidth < 420 ? 'compact' : 'normal',
      callback: (token) => { turnstileToken.value = token },
      'expired-callback': () => { turnstileToken.value = '' },
    })
  }

  onMounted(() => {
    if (!turnstileSiteKey) {
      errors.turnstile = 'The security check is not configured.'
      return
    }

    if (!document.querySelector('script[src*="turnstile"]')) {
      const script = document.createElement('script')
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }

    let attempts = 0

    turnstileInterval = setInterval(() => {
      attempts += 1

      if (window.turnstile && turnstileContainer.value) {
        renderTurnstile()
        clearInterval(turnstileInterval)
        return
      }

      if (attempts >= 40) {
        clearInterval(turnstileInterval)
        errors.turnstile = 'The security check could not load. Please refresh and try again.'
      }
    }, 300)
  })

  watch(isDark, () => {
    if (window.turnstile && turnstileContainer.value) {
      renderTurnstile()
    }
  })

  onBeforeUnmount(() => {
    clearInterval(turnstileInterval)
    if (widgetId !== null && window.turnstile) {
      try {
        window.turnstile.remove(widgetId)
      } catch {
        // Ignore cleanup errors
      }
    }
  })

  function validate() {
    errors.name = ''
    errors.email = ''
    errors.message = ''
    errors.turnstile = ''
    let valid = true

    if (!form.name.trim()) {
      errors.name = 'Name is required.'
      valid = false
    }
    if (!form.email.trim()) {
      errors.email = 'Email is required.'
      valid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Please enter a valid email.'
      valid = false
    }
    if (!form.message.trim()) {
      errors.message = 'Message is required.'
      valid = false
    }
    if (!turnstileToken.value) {
      errors.turnstile = 'Please complete the security check.'
      valid = false
    }
    return valid
  }

  function resetForm() {
    form.name = ''
    form.email = ''
    form.message = ''
    errors.name = ''
    errors.email = ''
    errors.message = ''
    errors.turnstile = ''
    formState.value = 'idle'
    turnstileToken.value = ''
    if (window.turnstile) window.turnstile.reset()
  }

  async function handleSubmit() {
    if (!validate()) return

    formState.value = 'sending'

    const now = new Date()
    const time = now.toLocaleString('en-PH', {
      timeZone: 'Asia/Manila',
      dateStyle: 'medium',
      timeStyle: 'short',
    })

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time,
          'cf-turnstile-response': turnstileToken.value,
        },
        publicKey
      )
      formState.value = 'success'
    } catch (err) {
      console.error('EmailJS error:', err)
      formState.value = 'error'
      if (window.turnstile) window.turnstile.reset()
      turnstileToken.value = ''
    }
  }

  return {
    turnstileContainer,
    turnstileToken,
    formState,
    form,
    errors,
    handleSubmit,
    resetForm,
  }
}