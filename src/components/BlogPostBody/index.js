import React from 'react'
import styles from './style.module.css'



const BlogPostBody = ({profileImage, authorsName,text,tags}) => (
<section className = {styles.blog2}>
    <div className = {styles.author}>
        <div className = {styles.profileImage}>
            {profileImage}
        </div>
        <h4 className = {styles.name}>{authorsName}</h4>
    </div>
    <p className = {styles.text}>
        <div > {text} </div>
        <h4 className = {styles.tags}> {tags}</h4>
    </p>
</section>
)

export default BlogPostBody