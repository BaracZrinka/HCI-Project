import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import styles from './style.module.css'
 
const PPost1 = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "ppost1.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 960, maxHeight:1960) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        extension
        publicURL
      }
    }
    
  `)
   return (
     <>
    <Img fluid={data.desktop.childImageSharp.fluid} className = {styles.image}/>
    
      <div>
        <h1>First Topic</h1>
        <button className = {styles.button}>Delete</button>
     </div>

   </>

   )
}
 
export default PPost1