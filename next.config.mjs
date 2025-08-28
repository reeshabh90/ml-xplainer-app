import withMDX from '@next/mdx'
const withMDXConfig = withMDX({
  extension: /\.mdx?$/
})
export default withMDXConfig({
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
})
