import React from 'react'
import styles from './style.module.css'
import SocialLinks from '../SocialLinks'
import Navigation from '../Navigation'
import Copyright from '../Copyright'

const Footer = () => (
    <footer className={styles.footer}>
        <SocialLinks/>
        <div className={styles.navigation}>
        <Navigation /></div>
        <Copyright/>
        <div className={styles.contact}>
            <span className = {styles.text}>Contact |</span> <span className={styles.link}>contactUs@gmail.com</span></div>
        

    </footer>
)
export default Footer