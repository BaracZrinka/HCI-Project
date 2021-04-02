import React from 'react'
import styles from './style.module.css'
//import { angle-down } from '@fortawesome/free-solid-svg-icons'

const BookmarkHeader = () => (
  <section className={styles.bookmarks}>
    <div className={styles.h1}>Revisit posts you've saved</div>
    <div className={styles.filter}>
      <button className={styles.select}>Search... umisto ovoga</button>
    </div>
  </section>
)

export default BookmarkHeader

