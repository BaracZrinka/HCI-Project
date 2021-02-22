import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import styles from './style.module.css'
 
const PPost3 = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "ppost3.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    
  `)
   return (
     <BackgroundImage
     Tag = "section"
     className = {styles.titleImage}
     fluid={data.desktop.childImageSharp.fluid}
      backgroundColor={`#040e18`}
      style={{ height: "100%", width: "100%" }}
      imgStyle={{ objectFit: "contain" }}
    >
       
        <h1 className = {styles.title}>Eating honey on a daily base</h1>
        <button className = {styles.button}>Delete</button>
        
    </BackgroundImage>

   )
}
 
export default PPost3