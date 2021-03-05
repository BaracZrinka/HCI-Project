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
            <span className = {styles.text}>Contact |</span> <a href="https://www.gmail.com/mail/help/intl/en/about.html?utm_expid=..." target="blank" className={styles.link}>contactUs@gmail.com</a></div>
        

    </footer>
)
export default Footer