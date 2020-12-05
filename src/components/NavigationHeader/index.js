import React from 'react'
import Navigation from '../Navigation'
import LogoText from '../LogoText'
//import ProfileNav from '../ProfileNav'
import LogoImage from '../Images/LogoImage'
import ProfileNav from '../Images/ProfileNav'



import styles from './style.module.css'

const NavigationHeader = ({activeTab}) => (
  <section className={styles.navigationHeader}>
    <LogoImage/>
      <LogoText/> 
      <Navigation activeTab = {activeTab}/>
      <ProfileNav/>
     
  </section>
)
export default NavigationHeader