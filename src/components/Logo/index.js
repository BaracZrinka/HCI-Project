import React from 'react'
import styles from './style.module.css'
import LogoImage from '../Images/LogoImage'
import LogoText from '../LogoText'

const Logo = () => (
    <section className = {styles.logo}>
    <LogoImage/>
    <LogoText/>
    </section>

)

export default Logo