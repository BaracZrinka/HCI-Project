import React from 'react'
import styles from './style.module.css'

        
  const CommentSection = ({profileImage, userName,comment}) => (
        <span className = {styles.blog3}>
            {profileImage}
            <h2 className = {styles.name}>{userName}</h2>
            <div > {comment} </div>
        </span>
)
export default CommentSection