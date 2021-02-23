// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import tag from './documents/tag'
import song from './documents/song'
import collection from './documents/collection'
import press from './documents/press'
import siteSettings from './documents/siteSettings'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import excerptPortableText from './objects/excerptPortableText'
import featuredMedia from './objects/featuredMedia'
import authorReference from './objects/authorReference'
import videoUrl from './objects/videoUrl'
import coverImage from './objects/coverImage'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'AKA',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    author,
    category,
    post,
    tag,
    collection,
    song,
    press,
    siteSettings,
    bodyPortableText,
    excerptPortableText,
    featuredMedia,
    authorReference,
    videoUrl,
    coverImage
  ]),
})
