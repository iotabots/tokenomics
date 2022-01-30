const LOGO = { link: '/', label: 'IOTABOTS' }
const HOME = { link: '/', label: 'Start' }
const METAVERSE = { link: '/metaverse', label: 'Metaverse' }
const LOGIN = { link: '/login', label: 'Login' }
const SIGNUP = { link: '/signup', label: 'Signup' }

// Hides anything except the LOGO (MENU[0]) - see Navigation.tsx
export const MENU = [LOGO, METAVERSE, LOGIN, SIGNUP]

// Only visible for mobile screens
export const MOBILE_MENU = [HOME, METAVERSE, LOGIN, SIGNUP]