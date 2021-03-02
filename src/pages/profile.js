import React from "react"
import SEO from "../components/seo"
import HeaderFooterLayout from '../layouts/headerFooter'
import ProfileAbout from '../components/ProfileAbout'
//import ProfileFeed from '../components/ProfileFeed'
import ProfileContainer from '../modules/ProfileContainer'
import { Link } from "gatsby"

const Profile = () => (
    <HeaderFooterLayout activeTab = "Profile">
        <ProfileAbout/>
        <ProfileContainer/>

    </HeaderFooterLayout>
)

export default Profile