import React from "react"
import styles from './styles.module.css'

const ProfileNav = () => (
    <section className = {styles.border}>
    <img src = '../src/images/profilePicture.jpg' alt = "Profile picture" className = {styles.profilePicture}/>
    </section>
)
export default ProfileNav