import React from 'react'
import Navigation from '../Navigation'
//import LogoText from '../LogoText'
//import ProfileNav from '../ProfileNav'
import Logo from '../Logo'
import ProfileImage1 from '../Images/ProfileImage1'



import styles from './style.module.css'

const NavigationHeader = ({activeTab}) => (
  <section className={styles.navigationHeader}>
    <div className={styles.logo}>
      <Logo/>
    </div>
    <div className={styles.navigation}>
    <Navigation activeTab = {activeTab} />
     
    </div>
    <div className = {styles.profileNav}>
    <ProfileImage1  />
  </div>
     
     
  </section>
)
export default NavigationHeader