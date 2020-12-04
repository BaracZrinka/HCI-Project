import React from 'react'
import NavigationBar from '../NavigationBar'
import ProfileNav from '../ProfileNav'

import styles from './style.module.css'

const Navigation = ({activeTab}) => (
<section className = {styles.navigation}>
   <NavigationBar activeTab = {activeTab}/>
    <ProfileNav/>
 
</section>
)

export default Navigation