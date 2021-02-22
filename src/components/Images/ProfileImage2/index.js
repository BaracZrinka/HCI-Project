import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProfileImage2 = () => {
    const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "male.png" }) {
        childImageSharp {
          fixed(width: 45) {
            ...GatsbyImageSharpFixed
          }
        }
       
      }
    }
  `)
   return <Img fixed={data.myImage.childImageSharp.fixed} />
 }
 

export default ProfileImage2