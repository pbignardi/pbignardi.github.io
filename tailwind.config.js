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
    theme: {
      extend: {},
    },
    fontFamily: {
      mono: ["JetBrains Mono", 'monospace'],
      serif: ["Roboto Slab", 'serif'],
      sans: ["Barlow", 'sans']
    }
  },
  plugins: []
}