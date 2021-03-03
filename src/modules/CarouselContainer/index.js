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
        <Carousel autoPlay infiniteLoop useKeyboardArrows dynamicHeight interval={3000} transitionTime={500}>
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
        )
}
 
export default CarouselContainer
