import React from 'react'
import styles from './style.module.css'

const ProfilePost = ({image, text}) => (
    <section className = {styles.hottestPost}>
        <div className = {styles.image} >{image}</div>
        <p className = {styles.text}>{text}</p>
        <button className={styles.button}>Read more</button>

    </section>

)
export default ProfilePost