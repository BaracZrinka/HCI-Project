import React from 'react'
import HeaderFooterLayout from '../layouts/headerFooter'
import BlogHeader from '../components/BlogHeader'
//import BlogFeed from '../components/BlogFeed'
import BlogContainer from '../modules/BlogContainer'


const Blog = () => (
    <HeaderFooterLayout activeTab = "Blog">
    <BlogHeader/>
    <BlogContainer/>
    </HeaderFooterLayout>
)

export default Blog