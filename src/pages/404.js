import React from "react"
import SEO from "../components/seo"
import styles from './404.module.css';
import HeaderFooterLayout from '../layouts/headerFooter'


const NotFoundPage = () => (
  
  <HeaderFooterLayout>
  <div className={styles.background}>
        
  <div className={styles.body}>

      <h2 className={styles.title}>404</h2>
      <span className={styles.title}>Page is not organic nor eco-friendly! :(</span>

      <div className={styles.buttondiv}>
          <button className={styles.button}>Return to Home</button>
      </div>
  </div>

</div>
</HeaderFooterLayout>
)

export default NotFoundPage
