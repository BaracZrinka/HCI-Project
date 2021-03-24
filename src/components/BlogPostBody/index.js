import React, { useState } from "react"
import ProfileAbout from "../ProfileAbout"
import styles from "./style.module.css"

const BlogPostBody = ({ profileImage, authorsName, text, tags, prop }) => {
  console.log(authorsName)
  console.log("sent prop")
  console.log(prop)
  

  /*const changeOwner = () => {
    if (authorsName === prop) { 
      setCount(count + 1);
      <ProfileAbout account={owner} />
      
    }
    else{
      console.log("ne mogu followat");
    }
  }*/


  let count = 0;
let ret = 
    <>
      <section className={styles.blog2}>
        <div className={styles.author}>
          <div className={styles.profileImage}>{profileImage}</div>
          <h4 className={styles.name}>{authorsName}</h4>
          <button className={styles.follow} /*onClick={()=>{JSON.stringify(authorsName) === "Petra" || "Zrinka" ? count = count + 1 && <ProfileAbout count = {count}/>: console.log("fail")}}*/>
            Follow
          </button>
        </div>
        <div className={styles.text}>
          <div> {text} </div>
          <div className={styles.tags}> #{tags}</div>
        </div>
      </section>
    </>

  return(<>
  {ret}
  </>)
}
export default BlogPostBody
