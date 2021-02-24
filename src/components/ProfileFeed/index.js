import React from 'react'
import styles from './style.module.css'
import ProfilePost from '../ProfilePost'
import PPost1 from '../../components/Images/PPost1'
import PPost2 from '../../components/Images/PPost2'
import PPost3 from '../../components/Images/PPost3'
import BPost1 from '../../components/Images/BPost1'
import BPost2 from '../../components/Images/BPost2'
import BPost3 from '../../components/Images/BPost3'
import HPost1 from '../../components/Images/HPost1'
import HPost2 from '../../components/Images/HPost2'
import HPost3 from '../../components/Images/HPost3'
import PPost4 from '../../components/Images/PPost4'



const FirstText = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo?'
const SecondText='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo?'
const ThirdText = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo?'

const ProfileFeed = () => (
    <>
    <hr className={styles.line}></hr>
    <div className={styles.buttonPosition}>
            <button className = {styles.button1}>Add new post</button>
    </div>
    
    <section className={styles.profile}>
            <div className = {styles.post1}>
            <ProfilePost image={<PPost1 />}  text={FirstText}/>
            </div>

            <div className = {styles.post2}>
            <ProfilePost image={<PPost2/>}  text={SecondText}/>
            </div>

            <div div className = {styles.post3}>
            <ProfilePost image={<PPost3 />}  text={ThirdText}/>
            </div>
        
            <div className = {styles.post1}>
            <ProfilePost image={<BPost1 />}  text={FirstText}/>
            </div>

            <div className = {styles.post2}>
            <ProfilePost image={<BPost2/>}  text={SecondText}/>
            </div>

            <div div className = {styles.post3}>
            <ProfilePost image={<BPost3 />}  text={ThirdText}/>
            </div>
        
        
            <div className = {styles.post1}>
            <ProfilePost image={<HPost1 />}  text={FirstText}/>
            </div>

            <div className = {styles.post2}>
            <ProfilePost image={<HPost2/>}  text={SecondText}/>
            </div>

            <div div className = {styles.post3}>
            <ProfilePost image={<HPost3 />}  text={ThirdText}/>
            </div>
            <div div className = {styles.post4}>
            <ProfilePost image={<PPost4 />}  text={FirstText}/>
            </div>
</section>
</>
)

export default ProfileFeed