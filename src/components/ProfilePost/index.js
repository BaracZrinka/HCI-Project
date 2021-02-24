import React, {useState} from 'react'
import styles from './style.module.css'
import ReadMore from '../ReadMore'


const ProfilePost = ({image, text}) => {
    const [popup,setPopup]=useState(false);
    const toggler =() => {
        setPopup((prev)=>!prev);
    };
  return(
    <div className = {styles.profilePost}>
        <div className = {styles.image} >{image}</div>
        <div className={styles.shadow}>
            <p className = {styles.text}>{text}</p>
            <div>
            <ReadMore closePopup={toggler}></ReadMore>
        </div>
        </div>

    </div>
  )

}
export default ProfilePost