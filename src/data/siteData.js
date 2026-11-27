export const site = {
  name: 'Johnlyn del Castillo',
  shortName: 'JDC',
  role: 'Junior Software QA Engineer',
  company: 'Sun Asterisk Philippines',
  email: 'johnlyndelcastillo@gmail.com',
  url: 'https://johnlyndc.vercel.app',
  location: 'Philippines',
  linkedin: 'https://www.linkedin.com/in/johnlyn-del-castillo',
  github: 'https://github.com/JohnlyndelCastillo',
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'craft', label: 'QA craft' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
]

export const socialLinks = [
  {
    label: 'LinkedIn',
    href: site.linkedin,
    icon: 'mdi:linkedin',
  },
  {
    label: 'GitHub',
    href: site.github,
    icon: 'mdi:github',
  },
  {
    label: 'Email',
    href: `mailto:${site.email}`,
    icon: 'mdi:email-outline',
  },
]

export const quickFacts = [
  {
    label: 'Role',
    value: 'Junior Software QA Engineer',
  },
  {
    label: 'Team',
    value: 'Sun Asterisk PH · ProOne',
  },
  {
    label: 'Focus',
    value: 'SDLC · Agile · QA systems',
  },
  {
    label: 'Based in',
    value: 'Philippines',
  },
]
