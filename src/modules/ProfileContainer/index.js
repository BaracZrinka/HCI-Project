import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
 
const ProfileContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(limit:8) {
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
            fixed(width: 300 height:250) {
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
      <>
      <hr className={styles.line}></hr>
    <div className={styles.buttonPosition}>
            <button className = {styles.button1}>Add new post</button>
    </div>
      <section className={styles.container}>
          {data.allContentfulBlogPost.nodes.map(node => {
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
      </>
  )
}
 
export default ProfileContainer
