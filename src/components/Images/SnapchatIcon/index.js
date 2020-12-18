import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SnapchatIcon = () => {
    const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "snapchat.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
   return <Img fixed={data.myImage.childImageSharp.fixed} />
 }
 

export default SnapchatIcon