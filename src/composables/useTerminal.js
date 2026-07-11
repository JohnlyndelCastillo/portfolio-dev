import { ref, onMounted } from 'vue'

const lines = [
  { text: '$ run-suite portfolio.spec.js', class: 'text-black font-bold' },
  { text: '● Discovering test cases...', class: 'text-gray-500' },
  { text: '● Running 42 tests', class: 'text-gray-500' },
  { text: '  ✓ UI renders correctly', class: 'text-green-600 font-semibold' },
  { text: '  ✓ Links are reachable', class: 'text-green-600 font-semibold' },
  { text: '  ✓ Responsive on mobile', class: 'text-green-600 font-semibold' },
  { text: '  ✓ No console errors', class: 'text-green-600 font-semibold' },
  { text: '  ✓ Accessibility checks pass', class: 'text-green-600 font-semibold' },
  { text: '', class: '' },
  { text: 'Tests: 42 passed, 0 failed', class: 'text-black font-bold' },
  { text: 'Duration: 1.42s', class: 'text-gray-500' },
]

export function useTerminal() {
  const visibleLines = ref([])
  const done = ref(false)

  onMounted(() => {
    let lineIndex = 0

    const typeLine = () => {
      if (lineIndex >= lines.length) {
        done.value = true
        return
      }

      const line = lines[lineIndex]
      visibleLines.value.push({ ...line, displayed: '' })
      const targetText = line.text
      let charIndex = 0

      if (targetText === '') {
        lineIndex++
        setTimeout(typeLine, 80)
        return
      }

      const typeChar = () => {
        if (charIndex < targetText.length) {
          visibleLines.value[lineIndex].displayed += targetText[charIndex]
          charIndex++
          setTimeout(typeChar, 28)
        } else {
          lineIndex++
          setTimeout(typeLine, 120)
        }
      }

      typeChar()
    }

    setTimeout(typeLine, 400)
  })

  return { visibleLines, done }
}