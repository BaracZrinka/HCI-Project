import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./style.module.css"
//import {ueeHistory, useParams} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import ProfileAbout from "../../components/ProfileAbout"
//import { cleanValue } from "react-select/src/utils"

library.add(faTrashAlt)

const ProfileContainer = ({name}) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(limit: 8) {
        totalCount
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

  let [posts, setPosts] = useState(null)
  let [isLoaded, setLoaded] = useState(false)
  const [check, setCheck] = useState(false)
  
  useEffect(() => {
    let allPosts = data.allContentfulBlogPost.nodes.map(post => {
      post.isShown = true
      return post
    })

    // console.log(posts);
    // console.log(data.allContentfulBlogPost.nodes);
    setPosts(allPosts)
    setLoaded(true)
    
  }, [])

  const changeSlug = property => {
    // console.log(property);
    let newPosts = posts.map(post => {
      if (post.slug === property) {
        post.isShown = false
      }
      return post
    })
    setPosts(newPosts)
  }

  let firstVar

  let count = 0
  if (isLoaded) {
    firstVar = (
      <>
        <hr className={styles.line}></hr>
        <div className={styles.buttonPosition}>
          <button className={styles.button1}>Add new post</button>
        </div>
        <section className={styles.container}>
          {posts.map(post => {
            if (post) {
              count = count + 1
            }
            return (
              <>
                <div
                  className={post.isShown ? styles.profilePost : styles.hide}
                >
                  <button key={post.slug} onClick={() => changeSlug(post.slug)}>
                    <FontAwesomeIcon
                      icon={["fas", "trash-alt"]}
                      fill="white"
                      size="2x"
                      color="black"
                      className={styles.trashIcon}
                    />
                  </button>
                  <Link to={`/posts/${post.slug}`}>
                    <Img
                      fluid={post.coverImage.fluid}
                      className={styles.image}
                    />
                  </Link>
                  <div className={styles.body}>
                    <div className={styles.title}>
                      <h3>{post.title}</h3>
                    </div>
                    <div className={styles.textContainer}>
                      <p className={styles.text}>
                        {post.summary.internal.content}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </section>
      </>
    )
  }
  return (
    <>
      <ProfileAbout total={count} name = {name}/>
      {firstVar}
    </>
  )
}

export default ProfileContainer
