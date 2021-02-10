// youtube.js
import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const Preview = ({ value }) => {
  const { url } = value
  const id = getYouTubeId(url)
  return (<YouTube videoId={id} />)
}

export default {
  name: 'videoUrl',
  type: 'object',
  title: 'Video Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Video URL'
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: Preview
  }
}
