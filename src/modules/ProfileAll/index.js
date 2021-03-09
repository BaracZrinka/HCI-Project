import React, {useState} from 'react';
import ProfileContainer from '../ProfileContainer'
import ProfileAbout from '../../components/ProfileAbout'
import {navigate} from 'gatsby'
import {myLocalStorage} from '../../helper'

const ProfileAll = () => {
    const [user, setUser] = useState(myLocalStorage.getItem('loggedIn'))
  
    if (!user) {
      setTimeout(() => navigate('/login'), 2000)
      return <p>
        You cannot view this page without login! <br/>You will be redirected to login page shortly
      </p>}
     
  
    return (
      <main>
        <ProfileAbout name = {user}/>
        <ProfileContainer/>
      </main>
    )
  }
  
  export default ProfileAll