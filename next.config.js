/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-prism')],
    providerImportSource: '@mdx-js/react'
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  pageExtensions: ['js' ,'jsx', 'ts', 'tsx', 'md', 'mdx']
})

module.exports = nextConfig
