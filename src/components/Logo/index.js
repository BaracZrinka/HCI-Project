import React from "react"
import styles from "./style.module.css"
import LogoImage from "../Images/LogoImage"

const Logo = () => (
  <section className={styles.logo1}>
    <div className={styles.divs}>
      <a href="http://localhost:8000">
        <LogoImage />
      </a>
    </div>
    <div className={styles.divs}>
      <a href="http://localhost:8000">
        <span className={styles.logoText}>BeBIO</span>
      </a>
    </div>
  </section>
)

export default Logo
