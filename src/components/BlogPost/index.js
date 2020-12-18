import React from 'react'
import styles from './style.module.css'
import BlogRating from '../Images/BlogRating'
import BlogPostBody from '../BlogPostBody'
import ProfileImage1 from '../Images/ProfileImage1'
import ProfileImage2 from '../Images/ProfileImage2'
import CommentSection from '../CommentSection'

const name1 = "_AuthorsName1"
const name2 = "_AuthorsName2"

const user1 = "_UserName1"
const user2 = "_UserName2"
const user3 = "_UserName3"

const tags1 = "#tag1#tag2#tag3"
const tags2 = "#tag1#tag2#tag3"

const FirstText = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
const SecondText='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'

const FirstCom = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium'
const SecondCom = 'Sed ut perspiciatis unde omnis iste'
const ThirdCom = 'ut perspiciatis'

const BlogPost = ({image, title}) => (
    <>
    <section className = {styles.blog1}>
        <div className = {styles.image}>{image}</div>
        <h2>{title}</h2>
        <BlogRating/>
    </section>
    <BlogPostBody profileImage = {<ProfileImage1/>} authorsName = {name1} text = {FirstText} tags={tags1}/>
    <div>
            <h2 className = {styles.commentsTitle}>Comments:</h2>
            <button>Add your comments here</button>
            <button className = {styles.button}>Rate</button>
    </div>
    <CommentSection profileImage = {<ProfileImage1/>} userName = {user1} comment = {FirstCom}/>
    <CommentSection profileImage = {<ProfileImage2/>} userName = {user2} comment = {SecondCom}/>
    <CommentSection profileImage = {<ProfileImage1/>} userName = {user3} comment = {ThirdCom}/>
    <button className = {styles.Button}>Read more</button>

    
    </>

)
export default BlogPost