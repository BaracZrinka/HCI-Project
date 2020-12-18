import React from 'react'
import SEO from "../components/seo"
import HeaderFooterLayout from '../layouts/headerFooter'
import LogInPage from '../components/LogInPage'
import { Link } from "gatsby"

const login = () => (
    <HeaderFooterLayout activeTab = "Log in">
    <LogInPage/>
    </HeaderFooterLayout>
)

export default login