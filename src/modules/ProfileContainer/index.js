import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
 
const ProfileContainer = () => {
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
          {data.allContentfulBlogPost3.nodes.map(node => {
            return (
              <Link to={`/posts/${node.slug}`}>
                  <div className={styles.profilePost}>
                <Img fixed={node.coverImage.fixed} className={styles.image}/>
               <div className={styles.shadow}>  
                <h3>{node.title}</h3>
                  <p className={styles.text}>{node.summary.internal.content}</p>
                  </div>
                  </div>
              </Link>
            )
          })}
      </section>
  )
}
 
export default ProfileContainer
