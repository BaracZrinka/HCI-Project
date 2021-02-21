import React from 'react'
 
import styles from './style.module.css';
import ProfileNav from '../Images/ProfileNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark } from '@fortawesome/free-solid-svg-icons'
import {faFileUpload } from '@fortawesome/free-solid-svg-icons'
import {faEdit } from '@fortawesome/free-solid-svg-icons'

/*<i class="far fa-bookmark"></i>*/


const ProfileAbout = () => (
    <section className={styles.form}>
            <div className = {styles.firstDiv}>
                <ProfileNav className={styles.picture}/></div> 
               <div className={styles.text}> 
                <h2 className={styles.username}>Username</h2>
                
              
           
              
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in</p>
            </div>       

            <div className={styles.icons}>
                <div className={styles.links}>
                    <a href="http://localhost:8000/bookmarks" className = {styles.addNew}><FontAwesomeIcon icon={faFileUpload} size ='2x' color='#696f45'/></a>  
                    <a href="http://localhost:8000/bookmarks" className = {styles.bookamark}><FontAwesomeIcon icon={faBookmark} size ='2x'  color='#696f45' /></a>  
                </div>
                <div className={styles.editPosition}>
                <FontAwesomeIcon icon={faEdit} size ='2x' color='#696f45'/>
                 </div>
            </div>
    </section>
    
)
export default ProfileAbout