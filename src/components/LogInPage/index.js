import React from 'react'
 
import styles from './style.module.css';

const LogInPage = () => (
    <section className={styles.form}>
            <h2 className={styles.title}>Log in</h2>
            <form>
                <div>
                    <label htmlFor="username">E-mail or username:</label>
                    <input name="username" type="text" />
                </div>              
                <div className={styles.password}>
                    <label htmlFor="password">Password:</label>
                    <input name="password" type="text" />
                </div>
                <button>Log in</button>
            </form>
            <span className={styles.span}>Don't have an account?<a href="http://localhost:8000/signup">Sign up</a></span>
        </section>
)
export default LogInPage