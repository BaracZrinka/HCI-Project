import React from "react"
import styles from "./style.module.css"
import {myLocalStorage} from '../../helper'

const BlogPostBody = ({ profileImage, authorsName, text, tags,prop, userAcc}) => {
  const setStorage = (property) => {
    console.log("inside setStorage- property:"+""+property)
    myLocalStorage.setItem("owner", property)
  }
 

  let ret = ( 
    <>
      <section className={styles.blog2}>
        <div className={styles.author}>
          <div className={styles.profileImage}>{profileImage}</div>
          <h4 className={styles.name}>{userAcc? userAcc : authorsName}</h4>
          {prop!== undefined  && prop!== authorsName ?
          <button className={styles.follow}>Follow</button>:''}
          {prop === null? <button className={styles.follow} onClick = {() => setStorage(authorsName)}>Follow</button>: console.log("skipped")}
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
