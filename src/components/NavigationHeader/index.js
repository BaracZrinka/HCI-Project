import React from 'react'
import Navigation from '../Navigation'
import Logo from '../Logo'
//import ProfileNav from '../ProfileNav'



import styles from './style.module.css'

const NavigationHeader = ({activeTab}) => (
  <section className={styles.navigationHeader}>
      <Logo/> 
      <Navigation activeTab = {activeTab}/>
     
  </section>
)
export default NavigationHeader