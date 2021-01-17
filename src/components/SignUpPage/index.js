import React from 'react'
 
import styles from './style.module.css';

const SignUpPage = () => (
    <section className={styles.form}>
        
        <div className={styles.signup}>
            <h2 className={styles.title}>Sign up</h2>
            <div className={styles.email}>
                <label htmlFor="email">E-mail:</label>
                <input name="email" type="text" />
            </div> 

            <div className={styles.username}>
                <label htmlFor="username">Username:</label>
                <input name="username" type="text" />
            </div>  

            <div className={styles.password}>
                <label htmlFor="password">Password:</label>
                <input name="password" type="text" />
            </div>

            <div className={styles.profession}>
                <label htmlFor="profession">Profession:</label>
                <input name="profession" type="text" />
            </div> 

            <div className={styles.buttondiv}>
                <button className={styles.button}>Sign up</button>
            </div>
        </div>
        
        <span className={styles.span}>Already have an account?<a href="http://localhost:8000/login">Log in</a></span>
    </section>
)
export default SignUpPage