const tailwindcss = require('tailwindcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const importer = require('postcss-import')

module.exports = {
  plugins: [
    importer,
    tailwindcss('./src/tailwind.js'),
    cssnano({
      preset: 'default'
    }),
    autoprefixer
  ]
}
