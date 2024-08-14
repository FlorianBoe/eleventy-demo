export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'src/assets': '/assets',
    'src/images': '/images',
  })

  return {
    dir: {
      input: 'src',
      output: "_site",
      includes: "_includes",
      layouts: '_layouts',
      data: '_data'
    }
  }
}
