export const projects = [
  {
    id: 'pass-slip',
    index: '01',
    title: 'Pass Slip System',
    type: 'Personal',
    description:
      'A pass slip management system for creating, tracking, and approving requests, built with vanilla PHP, JavaScript, and MySQL.',
    resumeDescription:
      'Pass slip management system with request tracking, admin approvals, and MySQL persistence.',
    highlights: [
      'Pass slip creation and status tracking',
      'Admin dashboard for managing requests',
      'MySQL-backed records and persistence',
    ],
    tech: [
      { name: 'PHP', color: '#777BB4' },
      { name: 'HTML', color: '#E34F26' },
      { name: 'CSS', color: '#1572B6' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'MySQL', color: '#4479A1' },
    ],
    link: 'https://github.com/JohnlyndelCastillo/pass-slip',
    private: false,
  },
  {
    id: 'daily-planner',
    index: '02',
    title: 'Daily Planner',
    type: 'Personal',
    description:
      'A lightweight daily task tracker built around a simple To Do → Doing → Done flow. No backend, no build step, just a single HTML file.',
    resumeDescription:
      'Lightweight daily task tracker with a To Do → Doing → Done flow and localStorage persistence.',
    highlights: [
      'Three-stage task tracking with timestamps',
      'Automatic daily reset and unfinished-task carry-over',
      'Keyboard-first workflow backed by localStorage',
    ],
    tech: [
      { name: 'HTML', color: '#E34F26' },
      { name: 'CSS', color: '#1572B6' },
      { name: 'JavaScript', color: '#F7DF1E' },
    ],
    link: 'https://github.com/JohnlyndelCastillo/daily-planner',
    private: false,
  },
  {
    id: 'inventory-system',
    index: '03',
    title: 'Inventory System',
    type: 'Collaborative',
    description:
      "A Node.js inventory and sales system built for Two J's Store, covering stock, pricing, checkout, and credit tracking.",
    resumeDescription:
      'Node.js inventory and sales system for stock, pricing, checkout, and credit tracking.',
    highlights: [
      'Inventory and category management',
      'Bulk stock adjustments and price lookup',
      'Sales reports and credit ledger tracking',
    ],
    tech: [
      { name: 'Node.js', color: '#339933' },
      { name: 'Express', color: '#111614' },
      { name: 'EJS', color: '#A91E50' },
      { name: 'Tailwind', color: '#06B6D4' },
      { name: 'MySQL', color: '#4479A1' },
    ],
    link: null,
    private: true,
  },
  {
    id: 'grocery-list',
    index: '04',
    title: 'Grocery List',
    type: 'Personal',
    description:
      'A phone-friendly grocery list with budget tracking, cart progress, and saved trip receipts.',
    resumeDescription:
      'React + Capacitor grocery list with budget tracking, cart progress, and saved trip receipts.',
    highlights: [
      'Live budget tracking with remaining or over-by totals',
      'Cart progress, trip receipts, and saved purchase history',
      'Installable PWA with a Capacitor Android build',
    ],
    tech: [
      { name: 'React', color: '#61DAFB' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Vite', color: '#646CFF' },
      { name: 'Tailwind', color: '#06B6D4' },
      { name: 'Capacitor', color: '#119EFF' },
    ],
    link: 'https://github.com/JohnlyndelCastillo/grocery-android-app',
    private: false,
  },
  {
    id: 'tindahan',
    index: '05',
    title: 'Tindahan',
    type: 'Personal',
    description:
      'A lightweight inventory and POS app for sari-sari stores — stock, utang sales, customer ledgers, and daily profit.',
    resumeDescription:
      'TypeScript inventory and POS app for sari-sari stores with stock, utang, ledgers, and profit reporting; Vitest, RTL, and Playwright coverage.',
    highlights: [
      'Inventory with low-stock alerts, stock history, and CSV export',
      'Cash and utang sales with change, voids, and customer ledgers',
      'Daily sales, cash, utang, and estimated profit summary',
      'Automated Vitest, React Testing Library, and Playwright coverage',
    ],
    tech: [
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'React', color: '#61DAFB' },
      { name: 'Fastify', color: '#000000' },
      { name: 'SQLite', color: '#003B57' },
      { name: 'Tailwind', color: '#06B6D4' },
      { name: 'Playwright', color: '#2EAD33' },
    ],
    link: null,
    private: true,
  },
]
