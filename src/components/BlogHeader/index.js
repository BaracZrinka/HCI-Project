import React from 'react'
import styles from './style.module.css'

const BlogHeader =()=>(
    <section className = {styles.header}>
        <button className={styles.filter}>Filter by:</button>
    </section>
)

export default BlogHeader

