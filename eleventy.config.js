export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({public: '/'});

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',

    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_layouts'
    }
  };
}
