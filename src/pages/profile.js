import SEO from "../components/seo"
import HeaderFooterLayout from '../layouts/headerFooter'
import ProfileAbout from '../components/ProfileAbout'
import ProfileFeed from '../components/ProfileFeed'
import NoProfile from '../components/NoProfile'
import { Link } from "gatsby"
import {myLocalStorage} from '../helper'

import React, {useState} from 'react'
import {navigate} from 'gatsby'

const Profile = () => {
  const [user, setUser] = useState(myLocalStorage.getItem('loggedIn'))

  if (!user) {
    setTimeout(() => navigate('/login'), 4000)
    return (
        <>
        <HeaderFooterLayout activeTab = "Profile">
            <NoProfile/>
        </HeaderFooterLayout>
        </>
      )
  }

  return (
    <>
    <HeaderFooterLayout activeTab = "Profile">
        <ProfileAbout/>
        <ProfileFeed/>
    </HeaderFooterLayout>
    </>
  )
}

export default Profile
