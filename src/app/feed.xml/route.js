export const dynamic = 'force-static'

import assert from 'assert'
import * as cheerio from 'cheerio'
import { Feed } from 'feed'

export async function GET(req) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'Igor Matsenko',
    email: 'igor@im-ai.tech',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Insights on AI automation, AIOps, and enterprise workflow optimization',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  let articleIds = require
    .context('../articles', true, /\/page\.mdx$/)
    .keys()
    .filter((key) => key.startsWith('./'))
    .map((key) => key.slice(2).replace(/\/page\.mdx$/, ''))

  // Skip article fetching during static export build
  if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_SITE_URL) {
    return new Response(feed.rss2(), {
      status: 200,
      headers: {
        'content-type': 'application/xml',
        'cache-control': 's-maxage=31556952',
      },
    })
  }

  for (let id of articleIds) {
    try {
      let url = `${siteUrl}/articles/${id}`
      let html = await (await fetch(url)).text()
      let $ = cheerio.load(html)

      let publicUrl = `${siteUrl}/articles/${id}`
      let article = $('article').first()
      let title = article.find('h1').first().text()
      let date = article.find('time').first().attr('datetime')
      let content = article.find('[data-mdx-content]').first().html()

      // Skip if any required field is missing
      if (!title || !date || !content) {
        continue
      }

      feed.addItem({
        title,
        id: publicUrl,
        link: publicUrl,
        content,
        author: [author],
        contributor: [author],
        date: new Date(date),
      })
    } catch (error) {
      // Skip articles that fail to fetch
      console.warn(`Failed to fetch article ${id}:`, error.message)
      continue
    }
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
