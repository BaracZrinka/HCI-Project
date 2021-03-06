import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCarousel(limit:6) {
        nodes {
          body {
            raw
          }
          title
          slug
          updatedAt
          coverImage {
            fixed(width: 700 height:300) {
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
    <div className={styles.carouselContainer}>
        <div className={styles.decor}>
            <h2 className={styles.hottest}>Hottest section</h2>
        </div>
        <Carousel autoPlay infiniteLoop useKeyboardArrows dynamicHeight interval={5500} transitionTime={3500}>
          {data.allContentfulCarousel.nodes.map(node => {
            return (
                  <Link to={`/hottestPosts/${node.slug}`}>
                      <div className={styles.carousel}>
                            <Img fixed={node.coverImage.fixed} className={styles.image}/>
                            <div className={styles.title}>
                                <span className={styles.span}>{node.title}</span>
                            </div>
                      </div>
                  </Link> 
            )
          })}
        </Carousel>
      </div>
        )
}
 
export default CarouselContainer
