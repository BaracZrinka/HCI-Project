import React,{useState, useEffect} from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark } from '@fortawesome/free-regular-svg-icons'
//import {posts as nekiNiz} from '../../constants/const'
import { library } from '@fortawesome/fontawesome-svg-core';
import BlogContainer from '../../modules/BlogContainer'

library.add(
    faBookmark
    
    // more icons go here
  );

  export default function App() {
    const [searchTerm, setTerm] = useState("");
   // const [searchResults, setSearchResults] = React.useState();
    const handleChanges = event => {
       setTerm(event.target.value);
     };

    /* useEffect(()=>{
       console.log("",searchTerm)
       let result = puniNiz.filter((el)=>el.tags.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
      console.log("ovo dole je resut filtriranja");
      console.log(result);
       setSearchResults(result);


     },[searchTerm]);
*/
return (
  <>
  <div>
    <input
    type = "text"
    placeholder = "Search"
          const value = {searchTerm}
           onChange= {handleChanges} 
      />
      </div>
      
     <div>
     <BlogContainer tags={searchTerm}/> </div>
     </>
     
)
      }


