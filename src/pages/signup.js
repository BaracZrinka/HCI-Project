import React from 'react'
import SEO from "../components/seo"
import HeaderFooterLayout from '../layouts/headerFooter'
import SignUpPage from '../components/SignUpPage'
import { Link } from "gatsby"

const signup = () => (
    <HeaderFooterLayout>
    <SignUpPage/>
    </HeaderFooterLayout>
)

export default signup