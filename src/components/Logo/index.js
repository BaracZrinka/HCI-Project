import React from "react"
import styles from "./style.module.css"
import LogoImage from "../Images/LogoImage"
import { Link } from "gatsby"

const Logo = () => (
  <section className={styles.logo1}>
    <div className={styles.divs}>
      <Link to={"/"}>
        <LogoImage />
      </Link>
    </div>
    <div className={styles.divs}>
      <Link to={"/"}>
        <span className={styles.logoText}>BeBIO</span>
      </Link>
    </div>
  </section>
)

export default Logo
