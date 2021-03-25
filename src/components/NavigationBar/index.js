import React from "react"
import styles from "./style.module.css"
//const navTabs = ['Home', 'Blogs', 'About', 'Log in', 'Your account']
import { navs as navTabs } from "../../constants/const"
import { Link } from "gatsby"
import {myLocalStorage} from '../../helper'

const loggedIn = () => !!myLocalStorage.getItem("loggedIn") 


let keysToRemove = ["loggedIn", "owner"];

const NavigationBar = ({ activeTab }) => (
  <nav className={styles.navigationBar}>
    {navTabs.map(({ tab, to }) => (
      <Link to={to}>
        <div className={tab === activeTab ? styles.active : ""}>{tab}</div>
      </Link>
    ))}

    {loggedIn() && (
      <Link to={"/profile"}>
        <div>Profile</div>
      </Link>
    )}

    <Link to={"/login"}>
      <div
        onClick={
          loggedIn() ? () => keysToRemove.forEach(k => myLocalStorage.removeItem(k)) : () => {}
          
        }
      >
        {loggedIn() ? "Logout" : "Login"}
      </div>
    </Link>
  </nav>
)
export default NavigationBar
