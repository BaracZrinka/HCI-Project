import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
//import BackgroundImage from "gatsby-background-image"
import styles from "./style.module.css"
//import banner from "../../images/banner.jpg"

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.title}>
        <h1>
          Sustainable, <br></br>eco-friendly<br></br>lifestyle
        </h1>
        <div className={styles.description}>
          is possible and easy with a community that<br></br> shares and cares!
        </div>
      </div>
      <section className={styles.section}>
        <div className={styles.buttonDiv}>
          <a href="http://localhost:8000/signup">
            <button className={styles.button1}>Join our community</button>
          </a>
        </div>
        <div className={styles.buttonDiv}>
          <a href="http://localhost:8000/blog">
            <button className={styles.button2}>
              Explore without an account
            </button>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Banner
