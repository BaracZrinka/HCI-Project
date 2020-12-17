import React from 'react'
import Navigation from '../Navigation'
//import LogoText from '../LogoText'
//import ProfileNav from '../ProfileNav'
import Logo from '../Logo'
import ProfileNav from '../Images/ProfileNav'



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
    <ProfileNav  />
  </div>
     
     
  </section>
)
export default NavigationHeader