import React from 'react'
import SEO from "../components/seo"
import HeaderFooterLayout from '../layouts/headerFooter'
import BlogHeader from '../components/BlogHeader'
import BlogFeed from '../components/BlogFeed'
import { Link } from "gatsby"

const signup = () => (
    <HeaderFooterLayout>
    <BlogHeader/>
    <BlogFeed/>
    </HeaderFooterLayout>
)

export default signup