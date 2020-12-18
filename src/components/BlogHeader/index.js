import React from 'react'
import styles from './style.module.css'

const BlogHeader =()=>(
    <section className = {styles.header}>
        <h1 className = {styles.h1}>Blog feed</h1>
        <button className={styles.filter}>Filter by:</button>
    </section>
)

export default BlogHeader

