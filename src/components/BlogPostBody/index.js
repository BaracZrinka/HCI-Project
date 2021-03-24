import React, { useState } from "react"
import styles from "./style.module.css"

const BlogPostBody = ({ profileImage, authorsName, text, tags }) => {
  console.log(authorsName)


  let ret = (
    <>
      <section className={styles.blog2}>
        <div className={styles.author}>
          <div className={styles.profileImage}>{profileImage}</div>
          <h4 className={styles.name}>{authorsName}</h4>
          <button className={styles.follow}>Follow</button>
        </div>
        <div className={styles.text}>
          <div> {text} </div>
          <div className={styles.tags}> #{tags}</div>
        </div>
      </section>
    </>
  )

  return <>{ret}</>
}
export default BlogPostBody
