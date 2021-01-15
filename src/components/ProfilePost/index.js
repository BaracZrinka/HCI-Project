import React from 'react'
import styles from './style.module.css'


const ProfilePost = ({image, text}) => (
    <section className = {styles.profilePost}>
        <div className = {styles.image} >{image}</div>
        <div className={styles.shadow}>
            <p className = {styles.text}>{text}</p>
            <button className={styles.button}>Read more</button>
        </div>
        

    </section>

)
export default ProfilePost