import React from "react"
import styles from "./style.module.css"
import { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from "gatsby-image"
import BlogRating from "../Images/BlogRating"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import ProfileImage1 from "../Images/ProfileImage1"
import ProfileImage2 from "../Images/ProfileImage2"
import CommentSection from "../CommentSection"
library.add(
  faPlus,
  faTimes
  // more icons go here
)

const user1 = "_UserName1"
const user2 = "_UserName2"
const user3 = "_UserName3"
const FirstCom =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
const SecondCom = "Sed ut perspiciatis unde omnis iste"
const ThirdCom = "ut perspiciatis"

const ReviewPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulReviewPage(limit: 9) {
        nodes {
          ingredients {
            raw
          }
          title
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

  useEffect(() => {
    let allPosts = data.allContentfulReviewPage.nodes.map(post => {
      post.isShown = false
      return post
    })

    setPosts(allPosts)
    setLoaded(true)
  }, [data.allContentfulReviewPage.nodes])

  const [button, setButton] = useState(false)
  const [more, setMore] = useState(false)
  const change = () => {
    setButton(true)
  }

  const toReadMore = property => {
    if (property) {
      setMore(true)

      let newPosts = posts.map(post => {
        if (post.title === property) {
          post.isShown = true
        }
        return post
      })

      setPosts(newPosts)
    }
  }

  const toReadLess = prop => {
    if (prop) {
      setMore(false)
      let newPosts = posts.map(post => {
        if (post.title === prop) {
          post.isShown = false
        }
        return post
      })
      setPosts(newPosts)
    }
  }

  let site
  if (isLoaded) {
    site = (
      <div className={styles.container}>
        {posts.map(post => {
          return (
            <div className={styles.wholeSite}>
              <div className={more ? "" : styles.bump}>
                <div key={post.title} onClick={() => toReadMore(post.title)}>
                  <Img fluid={post.coverImage.fluid} className={styles.image} />
                  <div className={styles.title}>{post.title}</div>
                </div>
              </div>
              <div className={styles.rating}>
                <BlogRating />
              </div>
              {post.isShown ? (
                <div className={styles.index}>
                  <>
                    {more && post.isShown ? (
                      <div
                        key={post.title}
                        onClick={() => toReadLess(post.title)}
                      >
                        <FontAwesomeIcon
                          icon={["fas", "times"]}
                          fill="white"
                          size="2x"
                          color="black"
                          className={styles.timesIcon}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    <div className={more ? "" : styles.bump}>
                      <div
                        key={post.title}
                        onClick={() => toReadMore(post.title)}
                      >
                        <Img
                          fluid={post.coverImage.fluid}
                          className={styles.image}
                        />
                        <div className={styles.title}>{post.title}</div>
                      </div>
                    </div>
                    <div className={styles.rating}>
                      <BlogRating />
                    </div>
                    <div className={styles.ingredientsTitle}>Ingredients:</div>
                    <div className={styles.ingredients}>
                      {renderRichText(post.ingredients)}
                    </div>
                    <div className={styles.reviewHead}>
                      <h3 className={styles.commentsTitle}>Reviews</h3>
                      <div className={styles.buttonDiv}>
                        <textarea
                          onClick={change}
                          placeholder="Add your review here..."
                          maxLength="160"
                        ></textarea>
                      </div>
                    </div>
                    {button ? (
                      <div className={styles.commentButtons}>
                        <button
                          className={styles.button1}
                          onClick={() => setButton(false)}
                        >
                          CANCEL
                        </button>
                        <button className={styles.button2}>POST</button>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className={styles.commentBody}>
                      <CommentSection
                        profileImage={<ProfileImage1 />}
                        userName={user1}
                        comment={FirstCom}
                      />
                      <CommentSection
                        profileImage={<ProfileImage2 />}
                        userName={user2}
                        comment={SecondCom}
                      />
                      <CommentSection
                        profileImage={<ProfileImage1 />}
                        userName={user3}
                        comment={ThirdCom}
                      />
                      <div className={styles.readmore}>
                        <button className={styles.readMoreButton}>
                          Read more
                        </button>
                      </div>
                    </div>
                  </>{" "}
                </div>
              ) : (
                ""
              )}
            </div>
          )
        })}
      </div>
    )
  }
  return <>{site}</>
}
export default ReviewPage
