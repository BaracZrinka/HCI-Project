import React from 'react'
import styles from './style.module.css'
import SocialLinks from '../SocialLinks'
import Navigation from '../Navigation'
import Copyright from '../Copyright'

const Footer = ({activeTab}) => (
    <footer className={styles.footer}>
        <SocialLinks/>
        <Navigation activeTab = {activeTab}/>
        <Copyright/>
        

    </footer>
)
export default Footer