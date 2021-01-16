import React from 'react'
import styles from './style.module.css';

const LogInPage = () => (
    <div className={styles.form}>
        
        <div className={styles.login}>
            <h2>Log in</h2>
            <div className={styles.email}>
                <label htmlFor="username">E-mail or username:</label>
                <input name="username" type="text" />
            </div>

            <div className={styles.password}>
                <label htmlFor="password">Password:</label>
                <input name="password" type="text" />
            </div>
            <div className={styles.button}>
                <button>Log in</button>
            </div>
        </div>

        <span>Don't have an account?&nbsp;<a href="http://localhost:8000/signup">Sign up</a></span>
    </div>
)
export default LogInPage