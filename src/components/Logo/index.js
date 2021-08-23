import React from "react"
import styles from "./style.module.css"
import LogoImage from "../Images/LogoImage"
import { Link } from "gatsby"

const Logo = () => (
  <div className={styles.logo1}>
    <div className={styles.div1}>
      <Link to={"/"}>
        <LogoImage />
      </Link>
    </div>
    <div className={styles.div2}>
      <Link to={"/"}>
        <span className={styles.logoText}>BeBIO</span>
      </Link>
    </div>
  </div>
)

export default Logo
