import React, {useState} from 'react'
import {navigate} from 'gatsby'
import styles from './style.module.css';


const SignUpPage = () => {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [profession, setProfession] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
  
    const submit = () => {
      setError(false)
      setLoading(true)
      setTimeout(() => {
        const loginSuccessful = !!(username != '' && password != '')
        setLoading(false)
        if (loginSuccessful) {
          localStorage.setItem("loggedIn", username)
          setError('Success')
          return navigate('/')
        }
          setError('Wrong input')
      }, 2000)
    }


return (
    <main className={styles.background} onKeyDown={key => {
      if (key.key === "Enter")
        return submit()
    }}>
      <section className={styles.container}>
        <h2 className={styles.title}>Sign up</h2>
        <section className={styles.field}>
          <label htmlFor="email">
            E-mail
          </label>
          <input name="email" onChange={e => setEmail(e.target.value)}/>
        </section>

        <section className={styles.field}>
          <label htmlFor="username">
            Username
          </label>
          <input name="username" onChange={e => setUserName(e.target.value)}/>
        </section>

        <section className={styles.field}>
          <label htmlFor="password">
            Password
          </label>
          <input name="password" type="password" onChange={e => setPassword(e.target.value)} />
        </section>

        <section className={styles.field}>
          <label htmlFor="profession">
            Profession
          </label>
          <input name="profession" onChange={e => setProfession(e.target.value)} />
        </section>

        <p className={`${styles[error !== "Success" ? 'error' : 'success']} ${error ? styles.show : ''}`}>{error}</p>
        <div className={styles.button}>
        <button className={styles.loginButton} onClick={() => submit()}>
          {loading ? 'Loading...' : 'Sign up'}
        </button>
        </div>
      </section>
      <span className={styles.spanclass}>Already have an account?&nbsp;<a href="http://localhost:8000/login">Log in</a></span>
    </main>
  )}


export default SignUpPage