import React from 'react'
import styles from './style.module.css'



const BlogPostBody = ({profileImage, authorsName,text,tags}) => (
<section className = {styles.blog2}>
    <span className = {styles.author}>
        {profileImage}
        <h2 className = {styles.name}>{authorsName}</h2>
    </span>
    <p className = {styles.text}>
        <div > {text} </div>
        <h3> {tags}</h3>
    </p>
</section>
)

export default BlogPostBody