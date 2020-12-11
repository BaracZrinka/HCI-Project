import React from 'react'
 
import styles from './style.module.css';
import ProfileNav from '../Images/ProfileNav';
import BookmarkIcon from '../Images/BookmarkIcon'

const ProfileAbout = () => (
    <section className={styles.form}>
            <div>
                <ProfileNav/>
                <p>Username</p>
            </div>   
            <div>
                <h2>About user</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in</p>
            </div>            
            <div>
                <BookmarkIcon/>
                <button>Edit</button>
            </div>
    </section>
)
export default ProfileAbout