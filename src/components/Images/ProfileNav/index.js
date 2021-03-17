import React from "react"
import { useStaticQuery, graphql } from "gatsby"
//import Img from "gatsby-image"
import Img from "gatsby-image"
import styles from "./style.module.css"

const ProfileNav = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "profilePicture.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        extension
        publicURL
      }
    }
  `)
  return (
    <Img
      className={styles.titleImage}
      fluid={data.desktop.childImageSharp.fluid}
    ></Img>
  )
}
export default ProfileNav
