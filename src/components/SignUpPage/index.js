import React from 'react'
 
import styles from './style.module.css';

const SignUpPage = () => (
    <section className={styles.form}>
            <h2 className={styles.title}>Sign up</h2>
            <form>
            <div>
                    <label htmlFor="email">E-mail:</label>
                    <input name="email" type="text" />
                </div> 
                <div>
                    <label htmlFor="username">Username:</label>
                    <input name="username" type="text" />
                </div>              
                <div className={styles.password}>
                    <label htmlFor="password">Password:</label>
                    <input name="password" type="text" />
                </div>
                <div>
                    <label htmlFor="profession">Profession:</label>
                    <input name="profession" type="text" />
                </div> 
                <button>Sign up</button>
            </form>
            <span className={styles.span}>Already have an account?<a href="http://localhost:8000/login">Log in</a></span>
        </section>
)
export default SignUpPage