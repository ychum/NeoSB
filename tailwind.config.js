const BLOG = require('./blog.config')
const { fontFamilies } = require('./lib/utils/font')

module.exports = {
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './themes/**/*.js'
  ],
  darkMode: BLOG.APPEARANCE === 'class' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    fontFamily: fontFamilies,
    screens: {
      sm: '540px',
      // => @media (min-width: 576px) { ... }
      md: '720px',
      // => @media (min-width: 768px) { ... }
      lg: '960px',
      // => @media (min-width: 992px) { ... }
      xl: '1140px',
      // => @media (min-width: 1200px) { ... }
      '2xl': '1536px'
    },
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.BACKGROUND_LIGHT || '#1a1a2e'
        },
        night: {
          DEFAULT: BLOG.BACKGROUND_DARK || '#0f0f1a'
        },
        hexo: {
          'background-gray': '#16213e',
          'black-gray': '#0a0a14',
          'light-gray': '#2a2a4a'
        },
        // 魔剑奇幻主题色系
        'dark-700': '#1a1030b3',
        dark: {
          DEFAULT: '#1a1a2e',
          2: '#16213e',
          3: '#1f1f3a',
          4: '#2a2a4a',
          5: '#3a3a5a',
          6: '#4a4a6a',
          7: '#5a5a7a',
          8: '#6a6a8a'
        },
        primary: '#7c3aed',
        'blue-dark': '#5b21b6',
        secondary: '#dc2626',
        'body-color': '#9ca3af',
        'body-secondary': '#a0aec0',
        warning: '#f59e0b',
        stroke: '#2a2a4a',
        'gray-1': '#1a1a2e',
        'gray-2': '#16213e',
        'gray-7': '#4a4a6a',
        // 魔剑专属色彩
        'shadowbane': {
          purple: '#7c3aed',
          red: '#dc2626',
          gold: '#d4af37',
          dark: '#0f0f1a',
          'magic': '#8b5cf6',
          'blood': '#991b1b',
          'shadow': '#1a1a2e'
        }
      },
      maxWidth: {
        side: '14rem',
        '9/10': '90%',
        'screen-3xl': '1440px',
        'screen-4xl': '1560px'
      },
      boxShadow: {
        input: '0px 7px 20px rgba(0, 0, 0, 0.03)',
        form: '0px 1px 55px -11px rgba(0, 0, 0, 0.01)',
        pricing: '0px 0px 40px 0px rgba(0, 0, 0, 0.08)',
        'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
        testimonial: '0px 10px 20px 0px rgba(92, 115, 160, 0.07)',
        'testimonial-btn': '0px 8px 15px 0px rgba(72, 72, 138, 0.08)',
        1: '0px 1px 3px 0px rgba(166, 175, 195, 0.40)',
        2: '0px 5px 12px 0px rgba(0, 0, 0, 0.10)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
