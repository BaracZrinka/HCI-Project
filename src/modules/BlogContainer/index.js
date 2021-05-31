import React, {useState} from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./style.module.css"
import ProfileImage1 from "../../components/Images/ProfileImage1"
import BlogRating from "../../components/Images/BlogRating"
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark } from "@fortawesome/free-regular-svg-icons"

import { library } from "@fortawesome/fontawesome-svg-core"

library.add(
  faBookmark

  // more icons go here
)

const BlogContainer = ({ tags }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogFeed(limit: 20) {
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
          tags
          authorsName
          updatedAt
          coverImage {
            fluid(quality: 90, maxWidth: 1920) {
              src
              srcSet
              srcSetWebp
              srcWebp
              base64
              aspectRatio
            }
          }
        }
      }
    }
  `)
  let [check, setCheck]= useState(false)
  let loading = <div>no</div>

  let filtered = (
    <>
      {data.allContentfulBlogFeed.nodes.map(node => {
        return (
          <div className={styles.container}>
            <div className={styles.post}>
              <div className={styles.imageDiv}>
                <Link to={`/blogPosts/${node.slug}`}>
                  <Img fluid={node.coverImage.fluid} className={styles.image} />
                </Link>
              </div>
              <div className={styles.body}>
                <div className={styles.tags}> #{node.tags}</div>
                <h2>{node.title}</h2>

                <section className={styles.blog2}>
                  <div className={styles.text}>
                    <div> {node.summary.internal.content} </div>
                  </div>
                  <div className={styles.ratingandname}>
                    <div className={styles.rating}>
                      <BlogRating />
                    </div>
                    <div className={styles.author}>
                      <h4 className={styles.name}>{node.authorsName}</h4>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )

 
  if (tags) {
    //console.log("exist")

    filtered = data.allContentfulBlogFeed.nodes.map(node => {
      if (node.tags.startsWith(tags)) {
        return (
          <div className={styles.container}>
            <div className={styles.post}>
              <div className={styles.imageDiv}>
                <Link to={`/blogPosts/${node.slug}`}>
                  <Img fluid={node.coverImage.fluid} className={styles.image} />
                </Link>
              </div>
              <div className={styles.body}>
                <div className={styles.tags}> #{node.tags}</div>
                <h2>{node.title}</h2>
                <section className={styles.blog2}>
                  <div className={styles.text}>
                    <div> {node.summary.internal.content} </div>
                  </div>
                  <div className={styles.ratingandname}>
                    <div className={styles.rating}>
                      <BlogRating />
                    </div>
                    <div className={styles.author}>
                      <h4 className={styles.name}>{node.authorsName}</h4>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )
      }
     
    })
  }
console.log("jhdoild\n" + filtered)
  return <>{filtered!=={}? filtered : "n"}</>
}

export default BlogContainer
