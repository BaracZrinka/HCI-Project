import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./style.module.css"
import ProfileImage1 from "../../components/Images/ProfileImage1"
import BlogPostBody from "../../components/BlogPostBody"
import BlogRating from "../../components/Images/BlogRating"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark } from "@fortawesome/free-regular-svg-icons"

import { library } from "@fortawesome/fontawesome-svg-core"
//import { node } from 'prop-types'
//import { faStripeS } from '@fortawesome/free-brands-svg-icons'

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

  //   const [check,setCheck] = useState(false);
  //  const loading = <h2>There is no such content</h2> ;

  console.log("skipped if statement")

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
                
                <div className={styles.rating}>
                  <BlogRating />
                </div>
                <section className={styles.blog2}>
                  <div className={styles.text}>
                    <div> {node.summary.internal.content} </div>
                    
                  </div>
                  <div className={styles.author}>
                    <div className={styles.profileImage}>
                      {<ProfileImage1 />}
                    </div>
                    <h4 className={styles.name}>{node.authorsName}</h4>
                    <div className={styles.follow}>Follow</div>
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
    console.log("exist")

    filtered = data.allContentfulBlogFeed.nodes.map(node => {
      if (node.tags.startsWith(tags)) {
        return (
          <div className={styles.container}>
            <div className={styles.post}>
              <Link to={`/blogPosts/${node.slug}`}>
                <div className={styles.imageAndIcon}>
                  <Img fluid={node.coverImage.fluid} className={styles.image} />
                  <FontAwesomeIcon
                    icon={["far", "bookmark"]}
                    size="2x"
                    color="black"
                    className={styles.bookmarkIcon}
                  />
                </div>
              </Link>
              <h2>{node.title}</h2>
              <div className={styles.rating}>
                <BlogRating />
              </div>
              <BlogPostBody
                profileImage={<ProfileImage1 />}
                authorsName={node.authorsName}
                text={node.summary.internal.content}
                tags={node.tags}
                className={styles.blogPostBody}
              />
              <Link to={`/blogPosts/${node.slug}`}>
                <button className={styles.button}>Read more</button>
              </Link>
            </div>
          </div>
        )
      }
    })
  }
  console.log("result type")
  console.log(filtered)

  return <>{filtered}</>
}

export default BlogContainer
