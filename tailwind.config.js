module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch', 
          }
        }
      },
    },
    theme: {
      extend: {},
    },
    fontFamily: {
      jetbrains_mono: ["JetBrains Mono", 'monospace'],
      serif: ["Roboto Slab", 'serif'],
      sans: ["Barlow", 'sans'],
      ibm_mono: [ 'IBM Plex Mono', 'monospace' ],
      fira_mono: [ 'Fira Mono', 'monospace' ],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}