import React from 'react'
import styles from './style.module.css'
import FacebookIcon from '../Images/FacebookIcon'
import InstagramIcon from '../Images/InstagramIcon'
//import SnapchatIcon from '../Images/SnapchatIcon'

const SocialLinks = () => (
    <nav className = {styles.SocialLinks}>  
     <a href="https://hr-hr.facebook.com/"><FacebookIcon/></a> 
     <a href ="https://www.instagram.com/"><InstagramIcon/></a>

    </nav>
)
export default SocialLinks