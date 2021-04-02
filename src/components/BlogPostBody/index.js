import React from "react"
import styles from "./style.module.css"
import { myLocalStorage } from "../../helper"

const BlogPostBody = ({ profileImage, authorsName, text, tags, userAcc }) => {
  const setStorage = property => {
    //console.log("inside setStorage- property:" + "" + property)
    myLocalStorage.setItem("owner", property)
  }
  //console.log("authors name:\n"+ authorsName.toLowerCase());
  console.log("userAccount:\n" + userAcc)
  
  let ret = (
    <>
      <section className={styles.blog2}>
        <div className={styles.author}>
          <div className={styles.profileImage}>{profileImage}</div>
          <h4 className={styles.name}>
            {authorsName !== undefined ? authorsName : userAcc}
          </h4>
          {authorsName ? (
            userAcc && userAcc === authorsName ? (
              ""
            ) : (
              <button className={styles.follow}>follow</button>
            )
          ) : (
            ""
          )}
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
