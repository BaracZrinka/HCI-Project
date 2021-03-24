import React, {useState} from 'react';
import ProfileContainer from '../ProfileContainer'
import {navigate} from 'gatsby'
import {myLocalStorage} from '../../helper'
//import ProfileAbout from '../../components/ProfileAbout';
import BlogPostBody from '../../components/BlogPostBody';

const ProfileAll = () => {
    const [user, setUser] = useState(myLocalStorage.getItem('loggedIn'))
    const [check, setCheck] = useState(false)
        if (!user) {
      setTimeout(() => navigate('/login'), 2000)
      return <p>
        You cannot view this page without login! <br/>You will be redirected to login page shortly
      </p>}
     
  
    return (
      <main>
        <ProfileContainer name = {user}/>
        {check?<BlogPostBody prop = {user}/> : ''}

      </main>
    )
  }
  
  export default ProfileAll