import React, { useState } from "react"
import { navigate } from "gatsby"
import styles from "./style.module.css"
import { myLocalStorage } from "../../helper"
import { faChessBishop } from "@fortawesome/free-solid-svg-icons"
const users = [
  {
    username: "zrinka",
    password: "123",
  },
  {
    username: "petra",
    password: "123",
  },
]

const LogInPage = () => {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = () => {
    setError(false)
    setLoading(true)
    setTimeout(() => {
      const loginSuccessful = !!users.find(
        user => user.username === username && user.password === password
      )
      setLoading(false)
      if (loginSuccessful) {
        myLocalStorage.setItem("loggedIn", username)
        setError("Success")
        return navigate("/")
      }
      setError("Wrong username or password")
    }, 2000)
  }

  return (
    <main
      className={styles.background}
      onKeyDown={key => {
        if (key.key === "Enter") return submit()
      }}
    >
      <section className={styles.container}>
        <h2 className={styles.title}>Log in</h2>
        <section className={styles.field}>
          <label htmlFor="username">E-mail or username</label>
          <input name="username" onChange={e => setUserName(e.target.value)} />
        </section>

        <section className={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </section>

        <p
          className={`${styles[error !== "Success" ? "error" : "success"]} ${
            error ? styles.show : ""
          }`}
        >
          {error}
        </p>
        <div className={styles.button}>
          <button className={styles.loginButton} onClick={() => submit()}>
            {loading ? "Loading..." : "Log in"}
          </button>
        </div>
      </section>
      <span className={styles.spanclass}>
        Don't have an account?&nbsp;
        <a href="http://localhost:8000/signup">Sign up</a>
      </span>

      <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </main>
  )
}

export default LogInPage
