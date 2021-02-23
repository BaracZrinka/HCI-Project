import React from 'react'
import {navigate} from 'gatsby'
import styles from './style.module.css';


const NoProfile = () => (

    <div className={styles.background}>
        
        <div className={styles.body}>

            <span className={styles.title}>You cannot view this page without login! </span>
            <span className={styles.title}>You will be redirected to login page shortly.</span>
        </div>

    </div>

)

export default NoProfile