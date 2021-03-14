import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  faTrashAlt
);
 
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
              <FontAwesomeIcon icon={['fas', 'trash-alt']} fill='white' size ='2x' color='black' className = {styles.bookmarkIcon}/>
              <Img fixed={node.coverImage.fixed} className={styles.image}/>
              <div className={styles.body}>  
                <div className={styles.title}>
                  <h3>{node.title}</h3>
                </div>
                <div className={styles.textContainer}>
                  <p className={styles.text}>{node.summary.internal.content}</p>
                </div>
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
