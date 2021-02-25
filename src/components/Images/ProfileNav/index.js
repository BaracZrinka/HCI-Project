import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
<<<<<<< HEAD
//import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import styles from "./style.module.css"
=======
import Img from "gatsby-image"

>>>>>>> a600e2322b8ccf3867c05f2d653a0ae3c4dc064d

const ProfileNav = () => {
    const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "profilePicture.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
   return(
    <BackgroundImage
    Tag = "section"
    className = {styles.titleImage}
    fluid={data.desktop.childImageSharp.fluid}
    backgroundColor={`#040e18`}
     
     imgStyle={{ objectFit: "contain",backgroundPositionX:"left"}}
     style={{ height: "150px", width: "150px", aspectRatio:"160/90" ,borderRadius:"100%"}}
   >
   </BackgroundImage>
 
   )
 }
export default ProfileNav