module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        'imperial-red': '#E63946',
        'light-steel-blue': {
          light: '#F7F8FD',
          DEFAULT: '#B0C1E8',
        },
        'prussian-blue': '#1D3557',
        'mild-grey': '#FAFAFA',
        background: '#F7F8FD',
        success: '#0070f3',
        cyan: '#79FFE1',
        linkedin: '#2867B2',
        github: '#24292e'
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
