#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const args = process.argv.slice(2)
if (!args[0]) {
  console.error('Usage: npm run new-step -- "My Step Title"')
  process.exit(1)
}
const title = args.join(' ')
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const filename = path.join(__dirname, '..', 'content', 'steps', `${slug}.mdx`)
const componentName = slug.replace(/-(.)/g, (_, c) => c.toUpperCase()).replace(/^./, s => s.toUpperCase())
const content = `import { InlineMath } from 'react-katex'

export default function ${componentName}() {
  return (
    <>
      <h2>${title}</h2>
      <p>Write your explanatory content here. You can use InlineMath and BlockMath from react-katex.</p>
    </>
  )
}
`
if (fs.existsSync(filename)) {
  console.error('Step already exists:', filename)
  process.exit(1)
}
fs.writeFileSync(filename, content)
console.log('Created new step:', filename)
