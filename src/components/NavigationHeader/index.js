import React from "react"
import Navigation from "../Navigation"
import Logo from "../Logo"
import ProfileImage1 from "../Images/ProfileImage1"
import ProfileNav from '../Images/ProfileNav'
import styles from "./style.module.css"
import {myLocalStorage} from '../../helper'



const NavigationHeader = ({ activeTab }) => {

  let pic=  myLocalStorage.getItem("loggedIn");

  return(
  <div className={styles.container}>
    <section className={styles.navigationHeader}>
      <div className={styles.logo}>
        <Logo/>
      </div>
      <div className={styles.navigation}>
        <Navigation activeTab={activeTab} />
      </div>
      <div className={styles.profileNav}>
        {pic? <ProfileNav prop = {pic}/>:<ProfileImage1/>}
        
      </div>
    </section>
  </div>
  )
}
export default NavigationHeader
