const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [require('@mapbox/rehype-prism')],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: '@mdx-js/react'
  }
});
module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
});
