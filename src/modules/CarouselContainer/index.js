import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
 
const CarouselContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCarousel(limit:6) {
        nodes {
          summary
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
      <section className={styles.container}>
          {data.allContentfulCarousel.nodes.map(node => {
            return (
              <Link to={`/hottestPosts/${node.slug}`}>
                  <div className={styles.profilePost}>
                <Img fixed={node.coverImage.fixed} className={styles.image}/>
               <div className={styles.shadow}>  
                <h3>{node.title}</h3>
                  </div>
                  </div>
              </Link>
            )
          })}
      </section>
  )
}
 
export default CarouselContainer
