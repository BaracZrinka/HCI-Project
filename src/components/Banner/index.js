import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import styles from './style.module.css'
 
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
     Tag = "section"
     className = {styles.titleImage}
     fluid={data.desktop.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      
      <div className = {styles.title}>
        <h1>BeBIO</h1>
        <p>
          Start exploring the world of healthy living
        </p>
        
        <section>
          <button className={styles.button}>Hottest posts</button>
          <button className={styles.button}>Newest posts</button>
        </section>
      </div>
    </BackgroundImage>
    </div>

   )
}
 
export default Banner