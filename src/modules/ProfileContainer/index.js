import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./style.module.css"
//import {useHistory, useParams} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import ProfileAbout from "../../components/ProfileAbout"
import { myLocalStorage } from "../../helper"

library.add(faTrashAlt)

const ProfileContainer = ({ name }) => {
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
  let [increment, setIncrememt] = useState(0)

  useEffect(() => {
    let allPosts = data.allContentfulBlogPost.nodes.map(post => {
      post.isShown = true
      return post
    })

    setPosts(allPosts)
    setLoaded(true)
  }, [data.allContentfulBlogPost.nodes])

  const changeSlug = property => {
    let newPosts = posts.map(post => {
      if (post.slug === property) {
        post.isShown = false
      }
      return post
    })
    setPosts(newPosts)
    setIncrememt(increment + 1)
  }

  let firstVar

  let count = 0

  if (isLoaded) {
    firstVar = (
      <>
        <hr className={styles.line}></hr>
        <div className={styles.con}>
          <div className={styles.buttonPosition}>
            <a href="http://localhost:8000/addNew">
              <button className={styles.button1}>Add new post</button>
            </a>
          </div>
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
                  <div key={post.slug} onClick={() => changeSlug(post.slug)}>
                    <FontAwesomeIcon
                      icon={["fas", "trash-alt"]}
                      fill="white"
                      size="2x"
                      color="black"
                      className={styles.trashIcon}
                    />
                  </div>
                  <Link to={`/profilePosts/${post.slug}`}>
                    <Img
                      fluid={post.coverImage.fluid}
                      className={styles.image}
                    />
                  </Link>
                  <div className={styles.body}>
                    <div className={styles.title}>
                      <Link to={`/profilePosts/${post.slug}`}>
                        <h2>{post.title}</h2>
                      </Link>
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

  count = count - increment

  return (
    <>
      <ProfileAbout total={count} name={name} />
      {firstVar}
    </>
  )
}

export default ProfileContainer
