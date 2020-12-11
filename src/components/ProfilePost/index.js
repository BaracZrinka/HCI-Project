import React from 'react'
import styles from './style.module.css'

const ProfilePost = ({image, title, text}) => (
    <section className = {styles.hottestPost}>
        <div className = {styles.image}>{image}</div>
        <div className={styles.articleHalf}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
        <button className={styles.button}>Read more</button>

    </section>

)
export default ProfilePost