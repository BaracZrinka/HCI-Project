import React from 'react'
import Navigation from '../Navigation'
//import LogoText from '../LogoText'
//import ProfileNav from '../ProfileNav'
import Logo from '../Logo'
import ProfileNav from '../Images/ProfileNav'



import styles from './style.module.css'

const NavigationHeader = ({activeTab}) => (
  <section className={styles.navigationHeader}>
      <Logo/>
      <Navigation activeTab = {activeTab}/>
      <ProfileNav/>
     
  </section>
)
export default NavigationHeader