import React from 'react'
import SEO from "../components/seo"
import HeaderFooterLayout from '../layouts/headerFooter'
import LogInPage from '../components/LogInPage'

const login = () => (
    <HeaderFooterLayout activeTab = "Blogs">
    <LogInPage/>
    </HeaderFooterLayout>
)

export default login