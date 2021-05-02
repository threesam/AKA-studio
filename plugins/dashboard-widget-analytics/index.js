import React from 'react'
import PropTypes from 'prop-types'

import styles from './Analytics.css'

const sites = [
  {
    name: 'ArtKillingApathy',
    url: 'https://threesam-umami.herokuapp.com/share/cOF6et91/aka'
  },
  {
    name: 'HardRoadOfHope',
    url: 'https://threesam-umami.herokuapp.com/share/6oa08fsd/hroh'
  }
]

const Analytics = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Analytics</h1>
      </header>
      <section className={styles.content}>
        <a className={styles.button} href={sites[0].url} target="_blank" rel="noopener noreferrer">{sites[0].name}</a>
        <a className={styles.button} href={sites[1].url} target="_blank" rel="noopener noreferrer">{sites[1].name}</a>
      </section>
    </div>
  )
}

export default {
  name: 'analytics',
  component: Analytics
}
