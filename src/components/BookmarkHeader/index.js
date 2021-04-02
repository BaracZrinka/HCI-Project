import React from 'react'
import styles from './style.module.css'
//import { angle-down } from '@fortawesome/free-solid-svg-icons'

const BookmarkHeader =()=>(
    <section className = {styles.bookmarks}>
        <>
        <h1 className = {styles.h1}>BOOKMARKS</h1>
        <div className={styles.filter}>
            <>
        <button className = {styles.select}>Filter by</button>
        </>
        </div>  
   </>
    </section>
)

export default BookmarkHeader

