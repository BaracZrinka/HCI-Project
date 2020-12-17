import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./style.module.css"

const ProfileNav = () => {
    const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "profilePicture.jpg" }) {
        childImageSharp {
          fixed(width: 50) {
            ...GatsbyImageSharpFixed
          }
        }
        extension
        publicURL
      }
    }
  `)
   return <Img fixed={data.myImage.childImageSharp.fixed} className={styles.profileNav1} />
 }
 

export default ProfileNav