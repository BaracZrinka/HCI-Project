import React from 'react'
import SEO from "../components/seo"
import HeaderFooterLayout from '../layouts/headerFooter'
import BookmarkFeed from '../components/BookmarkFeed'
import BookmarkHeader from '../components/BookmarkHeader'
import { Link } from "gatsby"

const bookmarks = () => (
    <HeaderFooterLayout>
    <BookmarkHeader/>
    <BookmarkFeed/>
    </HeaderFooterLayout>
)

export default bookmarks