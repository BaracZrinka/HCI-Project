import React from 'react'
import styles from './style.module.css'
//const navTabs = ['Home', 'Blogs', 'About', 'Log in', 'Your account']
import { navs as navTabs } from '../../constants/const'
import { Link } from 'gatsby'

const loggedIn = () => !!localStorage.getItem('loggedIn')

const NavigationBar = ({ activeTab, useThisStyle }) => (
    <nav className={styles[useThisStyle || 'navigationBar']}>
        {navTabs.map(({tab, to}) => (
          <Link to={to} >
              <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
          </Link>)
        )}
        {loggedIn() && <Link to={'/profile'}>
            <li>
                Profile
            </li>
        </Link>}
        <Link to={'/login'}>
            <li onClick={loggedIn() ? () => localStorage.removeItem('loggedIn') : () => {}}>
                {loggedIn() ? 'Log out' : 'Log in'}
            </li>
        </Link>

        
    </nav>
)

export default NavigationBar