import React from 'react'
import styles from './style.module.css'
import LogoImage from '../Images/LogoImage'
import LogoText from '../LogoText'

const Logo = () => (
    <section className = {styles.logo1}>
        <div className={styles.divs}>
        <LogoImage/>
        </div>
        <div className={styles.divs}>
        <LogoText />
        </div>
    </section>

)

export default Logo