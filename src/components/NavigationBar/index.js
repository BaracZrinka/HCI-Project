import React from 'react'
import styles from './style.module.css'
//const navTabs = ['Home', 'Blogs', 'About', 'Log in', 'Your account']
import { navs as navTabs } from '../../constants/const'
import { Link } from 'gatsby'
const NavigationBar = ({activeTab}) => (
    <nav className={styles.navigationBar}>
      {navTabs.map(({tab, to}) => (
        <div>
        <Link to={to} >
            <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
        </Link>
        </div>)
      )}
    </nav>
  )
export default NavigationBar