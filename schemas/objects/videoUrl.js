import React from 'react'
import getVideoId from 'get-video-id'
import YouTube from 'react-youtube'
import Vimeo from 'react-vimeo'
import capitalize from 'capitalize'

const Preview = ({ value }) => {
  const { url } = value
  const { id, service } = getVideoId(`${url}`)
  console.log('id', id)
  console.log('service', service)
  if (service === 'youtube') {
    return (<YouTube videoId={id} />)
  } else if (service === 'vimeo') {
    return (<Vimeo videoId={id} />)
  } else {
    return null
  }
}

export default {
  name: 'videoUrl',
  type: 'object',
  title: 'Video Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: `Video Url`
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: Preview
  }
}
