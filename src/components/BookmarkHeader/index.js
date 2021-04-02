import React from "react"
import styles from "./style.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { angle-down } from '@fortawesome/free-solid-svg-icons'

const BookmarkHeader = () => (
  <section className={styles.bookmarks}>
    <div className={styles.h1}>Revisit posts you've saved</div>
    <div className={styles.filter}>
      <button className={styles.select}>Search... umisto ovoga</button>
    </div>
  </section>
)

export default BookmarkHeader

/*import React, { useState } from 'react'
import styles from './style.module.css'
import Select from 'react-select'
import { handleInputChange } from 'react-select/src/utils';

const data = [
    {
        value:1,
        label:"Newest"
    },
    {
        value:2,
        label:"Oldest"
    },
    {
        value:3,
        label:"Rating"
    } 
];
const BookmarkHeader =()=>{


const [selectedValue, setSelectedValue] = useState({
    value:3,
    label:"Rating"
});
const handleInputChange = obj =>{
    setSelectedValue(obj);
}

return(
    <section className = {styles.bookmarks}>
        <h1 className = {styles.h1}>Bookmarks</h1>
        <div>
            <h2 className = {styles.select}>Filter by</h2>
            <Select 
            value={selectedValue}
            options={data}
            onChange={this.handleInputChange}
            />
        </div>
      
      
    </section>
)
}

export default BookmarkHeader
*/
