import React from "react"
import SEO from "../components/seo"
import HeaderFooterLayout from '../layouts/headerFooter'
import ProfileAbout from '../components/ProfileAbout'
import ProfileFeed from '../components/ProfileFeed'
import { Link } from "gatsby"

const Profile = () => (
    <HeaderFooterLayout activeTab = "Profile">
        <ProfileAbout/>
        <ProfileFeed/>

    </HeaderFooterLayout>
)

export default Profile