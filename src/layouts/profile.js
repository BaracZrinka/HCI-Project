import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from 'gatsby-image'
import {Link} from 'gatsby'
 
import styles from './profile.module.css'
import HeaderFooterLayout from '../layouts/headerFooter'
 
const ProfilePost = ({ pageContext }) => {
  const { body, title, coverImage, summary, next, prev } = pageContext
 
  return (
    <HeaderFooterLayout>
      <main className={styles.container}>
        <header className={!prev || !next ? styles.headerTwo : ''}>
          {prev && (<Link to={`/posts/${prev.slug}`}><span className={styles.button}>Previous</span></Link>)}
          <h2>
            {title}
          </h2>
          {next && (<Link to={`/posts/${next.slug}`}><span className={styles.button}>Next</span></Link>)}
        </header>
        <Img fixed={coverImage.fixed} className={styles.image}/>
        <article>
        {renderRichText(body)}
        </article>
      </main>
      <div className={styles.backButton}>
        <div className={styles.back}>
        <Link to='/profile'><button className={styles.button1}>Back to feed</button></Link>
        </div>
      </div>
    </HeaderFooterLayout>
  )
}
 
export default ProfilePost