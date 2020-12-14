import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProfileImage1 = () => {
    const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "female.png" }) {
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
   return <Img fixed={data.myImage.childImageSharp.fixed} />
 }
 

export default ProfileImage1