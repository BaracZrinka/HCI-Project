import React from 'react'
import styles from './style.module.css'
import BlogPost from '../BlogPost'
import Blog1 from '../Images/Blog1'
import Blog2 from '../Images/Blog2'

import Blog3 from '../Images/Blog3'
import Blog4 from '../Images/Blog4'
import Blog5 from '../Images/Blog5'
import Blog6 from '../Images/Blog6'
import Blog7 from '../Images/Blog7'
import Blog8 from '../Images/Blog8'
import Blog9 from '../Images/Blog9'
import Blog10 from '../Images/Blog10'

import Blog11 from '../Images/Blog11'
import Blog12 from '../Images/Blog12'
import Blog13 from '../Images/Blog13'
import Blog14 from '../Images/Blog14'
import Blog15 from '../Images/Blog15'
import Blog16 from '../Images/Blog16'
import Blog17 from '../Images/Blog17'
import Blog18 from '../Images/Blog18'
import Blog19 from '../Images/Blog19'
import Blog20 from '../Images/Blog20'

const FirstText = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
const SecondText='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
//const ThirdText = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'



const BlogFeed = () => (
    <section className = {styles.feed}>
        <div className={styles.blog1}>
            <BlogPost image={<Blog1 />} title = "First title" />
        </div>
        <div className={styles.blog2}>
            <BlogPost image={<Blog2 />}  title = "Second title" />
        </div>

        <div className={styles.blog2}>
            <BlogPost image={<Blog3 />}  title = "Second title" />
        </div>
        <div className={styles.blog2}>
            <BlogPost image={<Blog4 />}  title = "Second title" />
        </div>
        <div className={styles.blog2}>
            <BlogPost image={<Blog5 />}  title = "Second title" />
        </div>
        <div className={styles.blog2}>
            <BlogPost image={<Blog6 />}  title = "Second title" />
        </div>
        <div className={styles.blog2}>
            <BlogPost image={<Blog7 />}  title = "Second title" />
        </div>
        <div className={styles.blog2}>
            <BlogPost image={<Blog8 />}  title = "Second title" />
        </div>
        <div className={styles.blog2}>
            <BlogPost image={<Blog9 />}  title = "Second title" />
        </div>
        <div className={styles.blog2}>
            <BlogPost image={<Blog10 />}  title = "Second title" />
        </div>


        <div className={styles.blog2}>
            <BlogPost image={<Blog11 />}  title = "Second title" />
        </div>
        <div className={styles.blog2}>
            <BlogPost image={<Blog12 />}  title = "Second title" />
        </div>
        <div className={styles.blog2}>
            <BlogPost image={<Blog13 />}  title = "Second title" />
        </div>
        <div className={styles.blog2}>
            <BlogPost image={<Blog14 />}  title = "Second title" />
        </div>
        <div className={styles.blog2}>
            <BlogPost image={<Blog15 />}  title = "Second title" />
        </div>
        <div className={styles.blog2}>
            <BlogPost image={<Blog16 />}  title = "Second title" />
        </div>
        <div className={styles.blog2}>
            <BlogPost image={<Blog17 />}  title = "Second title" />
        </div>
        <div className={styles.blog2}>
            <BlogPost image={<Blog18 />}  title = "Second title" />
        </div>
        <div className={styles.blog2}>
            <BlogPost image={<Blog19 />}  title = "Second title" />
        </div>
        <div className={styles.blog2}>
            <BlogPost image={<Blog20 />}  title = "Second title" />
        </div>

</section>

)


export default BlogFeed