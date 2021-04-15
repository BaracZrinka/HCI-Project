import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styles from "./style.module.css"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div className={styles.banner}>
      <BackgroundImage
        Tag="section"
        className={styles.titleImage}
        fluid={data.desktop.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <div className={styles.title}>
          <h1>
            Sustainable, <br></br>eco-friendly<br></br>lifestyle
          </h1>
          <div className={styles.description}>
            is possible and easy with a community that<br></br> shares and
            cares!
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
      </BackgroundImage>
    </div>
  )
}

export default Banner
