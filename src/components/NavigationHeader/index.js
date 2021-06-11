import React, { useState } from "react"
import Navigation from "../Navigation"
import Logo from "../Logo"
import ProfileImage1 from "../Images/ProfileImage1"
import ProfileNav from "../Images/ProfileNav"
import styles from "./style.module.css"
import { myLocalStorage } from "../../helper"
import { FiMenu } from "react-icons/fi"
import { IoClose } from "react-icons/io5"
import { Link } from "gatsby"
//import { colors } from "react-select/src/theme"

const NavigationHeader = ({ activeTab }) => {
  const navTabs = [
    { tab: "Home", to: "/" },
    { tab: "Blog", to: "/blog" },
    { tab: "Reviews", to: "/review" },
    { tab: "Contact", to: "/contact" },
    { tab: "Login", to: "/login" },
  ]

  const [hamburgerNav, setHamburgerNav] = useState(false)
  const [check, setCheck] = useState(true)
  let hamburger

  const changeHamburger = () =>
    hamburgerNav === false ? setHamburgerNav(true) : null

  let pic = myLocalStorage.getItem("loggedIn")

  if (hamburgerNav) {
    hamburger = (
      <>
        {check ? (
          <>
            <IoClose
              onClick={() => setCheck(false)}
              style={{ marginBottom: "-5px", height: "35px", width: "35px" }}
            />
            {check === false ? null : (
              <ul className={styles.links}>
                {navTabs.map(({ tab, to }) => (
                  <li>
                    <Link to={to}>
                      <span>{tab}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <FiMenu
            onClick={() => setCheck(true)}
            style={{ marginBottom: "-5px", height: "35px", width: "35px" }}
          />
        )}

        {check === false ? null : (
          <ul className={styles.links}>
            {navTabs.map(({ tab, to }) => (
              <li>
                <Link to={to}>
                  <span>{tab}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    )
  } else {
    hamburger = (
      <FiMenu style={{ marginBottom: "-5px", height: "35px", width: "35px" }} />
    )
  }
  return (
    <div className={styles.container}>
      <section className={styles.navigationHeader}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.navigation}>
          <Navigation activeTab={activeTab} />
        </div>
        <button className={styles.hamburger} onClick={changeHamburger}>
          {hamburger}
        </button>
        <div className={styles.profileNav}>
          {pic ? <ProfileNav prop={pic} /> : <ProfileImage1 />}
        </div>
      </section>
    </div>
  )
}
export default NavigationHeader
