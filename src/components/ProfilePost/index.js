import React from 'react'
import styles from './style.module.css'

const ProfilePost = ({image, text}) => (
    <section className = {styles.hottestPost}>
        <div className = {styles.image} >{image}</div>
        <div className={styles.articleHalf}>
            
            <p>{text}</p>
        </div>
        <button className={styles.button}>Read more</button>

    </section>

)
export default ProfilePost