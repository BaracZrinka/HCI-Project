import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
 
const BlogContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost3 {
        nodes {
          summary {
            internal {
              content
            }
          }
          body {
            raw
          }
          title
          slug
          updatedAt
          coverImage {
            fixed(width: 300) {
              src
              srcSet
              srcSetWebp
              srcWebp
              width
              height
              base64
              aspectRatio
            }
          }
        }
      }
    }`)
 
    return (
      <section className={styles.container}>
        <h2>Read my profile posts!</h2>
        <ul className={styles.list}>
          {data.allContentfulBlogPost3.nodes.map(node => {
            return (
              <Link to={`/post/${node.slug}`}>
                <li>
                  <Img fixed={node.coverImage.fixed} />
                  <h3>{node.title}</h3>
                  <span>{node.summary.internal.content}</span>
                </li>
              </Link>
            )
          })}
        </ul>
      </section>
  )
}
 
export default BlogContainer