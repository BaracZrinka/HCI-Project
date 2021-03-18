import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from "gatsby-image"
import { Link } from "gatsby"
import BlogPostBody from "../../src/components/BlogPostBody"
import ProfileImage1 from "../components/Images/ProfileImage1"
import ProfileImage2 from "../components/Images/ProfileImage2"
import CommentSection from "../components/CommentSection"
import BlogRating from "../components/Images/BlogRating"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark } from "@fortawesome/free-regular-svg-icons"
import styles from "./blog.module.css"
import HeaderFooterLayout from "../layouts/headerFooter"
import { library } from "@fortawesome/fontawesome-svg-core"

library.add(
  faBookmark
  // more icons go here
)

const user1 = "_UserName1"
const user2 = "_UserName2"
const user3 = "_UserName3"

const FirstCom =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium"
const SecondCom = "Sed ut perspiciatis unde omnis iste"
const ThirdCom = "ut perspiciatis"

const BlogFeed = ({ pageContext }) => {
  const { body, title, coverImage, next, prev, authorsName, tags } = pageContext

  return (
    <HeaderFooterLayout>
      <main className={styles.container}>
        <header className={!prev || !next ? styles.headerTwo : ""}>
          {prev && (
            <Link to={`/blogPosts/${prev.slug}`}>
              <span className={styles.button}>Previous</span>
            </Link>
          )}
          {next && (
            <Link to={`/blogPosts/${next.slug}`}>
              <span className={styles.button}>Next</span>
            </Link>
          )}
        </header>
        <div className={styles.wholeBlog}>
          <section className={styles.blog1}>
            <div className={styles.imageAndIcon}>
              <Img fixed={coverImage.fixed} className={styles.image} />

              <FontAwesomeIcon
                icon={["far", "bookmark"]}
                size="2x"
                color="black"
                className={styles.bookmarkIcon}
              />
            </div>
            <div className={styles.head}>
              <div className={styles.h2}>
                <h2>{title}</h2>
              </div>
              <div className={styles.rating}>
                <BlogRating />
              </div>
            </div>
          </section>
          <BlogPostBody
            profileImage={<ProfileImage1 />}
            authorsName={authorsName}
            tags={tags}
          />

          <article>{renderRichText(body)}</article>

          <div className={styles.commentHead}>
            <h3 className={styles.commentsTitle}>Comments:</h3>
            <div className={styles.buttonDiv}>
              <textarea
                placeholder="Add your comment here..."
                maxLength="160"
              ></textarea>
            </div>
          </div>
          <div className={styles.commentButtons}>
            <button className={styles.button1}>CANCEL</button>
            <button className={styles.button2}>COMMENT</button>
          </div>

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
              <button className={styles.readMoreButton}>Read more</button>
            </div>
          </div>
        </div>
      </main>

      <div className={styles.backButton}>
        <div className={styles.back}>
          <Link to="/blog">
            <button className={styles.buttonBack}>Back to feed</button>
          </Link>
        </div>
      </div>
    </HeaderFooterLayout>
  )
}

export default BlogFeed
