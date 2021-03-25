import React, {useState} from 'react';
import ProfileContainer from '../ProfileContainer'
import {navigate} from 'gatsby'
import {myLocalStorage} from '../../helper'
import BlogHeader from '../../components/BlogHeader'

const ProfileAll = () => {
    const [user, setUser] = useState(myLocalStorage.getItem('loggedIn'))
    const url = typeof window !== 'undefined' ? window.location.pathname : '';
    console.log("path" + url)

    if(url === "/profile"){
        if (!user) {
      setTimeout(() => navigate('/login'), 2000)
      return <p>
        You cannot view this page without login! <br/>You will be redirected to login page shortly
      </p>}}
     
  
    return (
      url === "/profile" ?
        <ProfileContainer name = {user} /> :
        <BlogHeader name = {user}/>

     
    )
  }
  
  export default ProfileAll