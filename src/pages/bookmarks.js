import React from 'react'
import HeaderFooterLayout from '../layouts/headerFooter'
import BookmarkFeed from '../components/BookmarkFeed'
import BookmarkHeader from '../components/BookmarkHeader'

const bookmarks = () => (
    <HeaderFooterLayout>
    <BookmarkHeader/>
    <BookmarkFeed/>
    </HeaderFooterLayout>
)

export default bookmarks 