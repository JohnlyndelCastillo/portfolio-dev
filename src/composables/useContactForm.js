import { ref, reactive, onMounted } from 'vue'
import emailjs from '@emailjs/browser'

export function useContactForm({ serviceId, templateId, publicKey, turnstileSiteKey }) {
  const turnstileContainer = ref(null)
  const turnstileToken = ref('')
  const formState = ref('idle')

  const form = reactive({ name: '', email: '', message: '' })
  const errors = reactive({ name: '', email: '', message: '', turnstile: '' })

  onMounted(() => {
    if (!document.querySelector('script[src*="turnstile"]')) {
      const script = document.createElement('script')
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }

    const interval = setInterval(() => {
      if (window.turnstile && turnstileContainer.value) {
        window.turnstile.render(turnstileContainer.value, {
          sitekey: turnstileSiteKey,
          callback: (token) => { turnstileToken.value = token },
          'expired-callback': () => { turnstileToken.value = '' },
        })
        clearInterval(interval)
      }
    }, 300)
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

  return { turnstileContainer, turnstileToken, formState, form, errors, handleSubmit }
}