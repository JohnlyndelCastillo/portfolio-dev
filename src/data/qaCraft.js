export const craftSteps = [
  {
    number: '01',
    icon: 'mdi:target',
    title: 'Map the risk',
    description:
      'Start from requirements and real user flows. Identify the critical paths and failure modes before writing a single test case, so coverage follows risk instead of habit.',
    tags: ['Risk map', 'Test plan'],
  },
  {
    number: '02',
    icon: 'mdi:clipboard-text-outline',
    title: 'Design the coverage',
    description:
      'Write traceable test cases with edge cases, realistic data, and clear expected results. Every case has a purpose, and every requirement has a way to prove it works.',
    tags: ['Test cases', 'Test data'],
  },
  {
    number: '03',
    icon: 'mdi:history',
    title: 'Audit the regression suite',
    description:
      'Reconcile legacy, hard-coded test cases with the current codebase. Retire drift, flag gaps, and keep the regression suite honest as the product changes.',
    tags: ['Regression audit', 'Gap report'],
  },
  {
    number: '04',
    icon: 'mdi:robot-outline',
    title: 'Automate the repeatable',
    description:
      'Build reusable skills and workflows for test design, bug reports, and daily QA operations, including agentic QA with Claude Code and MCPs.',
    tags: ['QA skills', 'Workflows'],
  },
]

export const dailyPractices = [
  'Manual testing',
  'Functional testing',
  'Regression testing',
  'Web testing',
  'API testing',
  'Test case design',
  'Defect reporting',
  'Agile / Scrum',
  'SDLC',
  'Test case maintenance',
]
