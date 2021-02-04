const fetch = require('node-fetch')
const decode = require('ent/decode')
require('dotenv').config()
const { parseISO, format } = require('date-fns')
const sanityClient = require('@sanity/client')

const Schema = require('./schema').default
console.log(Schema)

const WORDPRESS_API_POSTS = `https://artkillingapathy.com/wp-json/wp/v2/posts?per_page=2`

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: false
})

async function importPosts() {
  // get page of posts
  const res = await fetch(WORDPRESS_API_POSTS)
  const data = await res.json()

  // loop over posts and grab featured image
  const featuredImageUrls = data.map(post => {
    // transform url from links
    const url = getMedia(post)

    return url
  })

  const featuredImages = await fetchAllUrls(featuredImageUrls)

  const posts = data.map((post, index) => {
    // destructure relevant data
    const { id, date, slug, title, content, excerpt } = post
    console.log(featuredImages[index])
    post.mainImage = {
      id: featuredImages[index].id,
      alt: featuredImages[index].alt
    }
    const transformedPost = transform(post)
    return transformedPost
  })

  return posts
}

function fetchAllUrls(urls) {
  return Promise.all(
    urls.map(url => fetch(url)
      .then(r => r.json())
      .then(({ source_url, title }) => {
        const alt = title.rendered
        const asset = fetch(source_url)
          .then(res => res.buffer())
          .then(buffer => client.assets.upload('image', buffer))
          .then(asset => {
            return {
              id: asset._id,
              alt
            }
          })
        return asset
      })
      .catch(error => console.error(error))
    )
  )
}

function getMedia(post) {
  const linksObject = post._links
  const linksAsArray = Object.values(linksObject)
  const mediaUrl = linksAsArray[7][0].href
  return mediaUrl
}

const importedPosts = importPosts()
  // .then(posts => posts.map(transform))
  .then(documents => {
    let transaction = client.transaction()
    documents.forEach(document => {
      transaction.createOrReplace(document)
    })
    return transaction.commit()
  })
  .catch(error => console.error(error))


function transform(data) {
  return {
    _id: `wordpress-${data.id}`,
    _type: 'post',
    title: decode(data.title.rendered),
    slug: {
      current: data.slug
    },
    mainImage: {
      asset: {
        _type: 'reference',
        _ref: data.mainImage.id
      },
      alt: data.mainImage.alt
    },
    publishedAt: data.date,
    body: cleanSrcset(decode(data.content.rendered)),
    excerpt: decode(data.excerpt.rendered)
  }
}

function cleanSrcset(node) {
  return node
    .replace(/srcset="(.*?)"/g, "")
    .replace(/src="data(.*?)"/g, "")
    .replace(/data-orig-src/g, "src")
}
