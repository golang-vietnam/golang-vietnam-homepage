let Parser = require('rss-parser')
let parser = new Parser()
const jsdom = require('jsdom')
let { JSDOM } = jsdom
let dayjs = require('dayjs')
const fsExtra = require('fs-extra')

;(async () => {
  let feed = await parser.parseURL('https://golangweekly.com/rss/1c31a5j2')
  //   console.log(feed.title)
  const date = dayjs(feed.items[0].pubDate)['$d']

  const { document } = new JSDOM(`${feed.items[0].content}`).window
  const extractData = Array.prototype.slice
    .call(document.querySelectorAll('table'), 4, 9)
    .map(table => {
      const a = table.querySelector('p span a')
      const title = a.innerHTML
      const link = a.getAttribute('href')
      let desc = ''
      Array.prototype.forEach.call(
        table.querySelector('p').childNodes,
        (node, index) => {
          if (index === 0) {
            return
          }

          if (node.nodeType === 3) {
            desc += node.wholeText
          } else {
            desc += node.innerHTML
          }
        }
      )

      const author = table
        .querySelector('p:last-child')
        .childNodes[0].wholeText.trim()

      return {
        title,
        link,
        desc,
        author,
        date,
      }
    })

  let content = []
  let count = 0
  content[count++] = '---'
  content[count++] = 'key: news'
  content[count++] = 'list:'
  extractData.forEach(({ title, link, desc, author, date }) => {
    content[count++] = `  - date: ${date}`
    content[count++] = `    link: ${link}`
    content[count++] = `    desc: ${desc}`
    content[count++] = `    author: ${author}`
    content[count++] = `    title: ${title}`
  })
  content[count++] = '---'

  const file = 'sources/news/index.md'
  fsExtra.outputFile(file, content.join('\n'), err => {
    if (err) {
      console.log(err)
    }
  })
})()
