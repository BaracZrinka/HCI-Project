import React from 'react'
import styles from './style.module.css'
import SearchBar from '../SearchBar'

const BlogHeader =()=>(
    <section className = {styles.header}>
        
    <div className={styles.searchBar}>
    <SearchBar/>
    </div>
    </section>
)



export default BlogHeader

