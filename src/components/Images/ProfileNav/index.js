import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from './style.module.css'

const ProfileNav = () => {
    const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "profilePicture.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 85) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        extension
        publicURL
      }
    }
  `)
   return(
    <div style={{maxWidth: "800px", minWidth: "50px"}}>
    <Img className = {styles.photo} fluid={data.desktop.childImageSharp.fluid} />
    </div>)
 }
 

export default ProfileNav