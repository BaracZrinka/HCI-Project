import React from 'react'
import styles from './style.module.css'



const BlogPostBody = ({profileImage, authorsName,text,tags}) => (
<section className = {styles.blog2}>
    <div className = {styles.author}>
        <div className = {styles.profileImage}>
            {profileImage}
        </div>
        <h4 className = {styles.name}>{authorsName}</h4>
        <div className = {styles.follow}>Follow</div>
    </div>
    <div className = {styles.text}>
        <div > {text} </div> 
        <div className = {styles.tags}> #{tags}</div>   
    </div>
</section>
)

export default BlogPostBody