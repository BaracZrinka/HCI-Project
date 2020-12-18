import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import styles from './style.module.css'
 
const BPost2 = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "bpost2.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        extension
        publicURL
      }
    }
    
  `)
   return (
     <BackgroundImage
     Tag = "section"
     className = {styles.titleImage}
     fluid={data.desktop.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <div>
        <h1>Second Topic</h1>
        <button className = {styles.button}>Remove</button>
     </div>

    </BackgroundImage>

   )
}
 
export default BPost2