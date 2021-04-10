import React, {useState} from 'react'
import styles from "./style.module.css"

const AddNewFeed = () =>{
    const [button, setButton] = useState(false)
    const [count, setCount] = useState(1)
  const change = () => {
    setCount(count + 1)
    console.log(count)
    setButton(true)
  }

  let isValid = () =>{
      console.log("inside the func")
      console.log("count"+count)
      if(count === 9){
          console.log("here")
        alert('Your post is ready to post! :)')
      }
      else{
          console.log("dont")
          alert("All fields must be filled!")
      }
  }
  let clearIt = () =>{
    setButton(false)
  }
  const [searchTerm, setTerm] = useState("")
 
  const handleChanges = event => {
    setTerm(event.target.value)
  }
  return (
    <div className = {styles.wholeBlog}>
    <div className={styles.text}>
    <textarea
      onClick={()=>change()}
      placeholder="Insert title"
      maxLength="160"
      value = {button ? searchTerm : ""}
      onChange = {handleChanges}
    ></textarea>
    </div>
    <div className={styles.pictureDiv}>
        <div>Cover Image</div>
        <button className={styles.insert} onClick={()=>change()}>Insert file</button>
    </div>

    <div className={styles.summary}>
    <textarea
      onClick={()=>change()}
      placeholder="Insert summary"
      maxLength="160"
      value = {button ? searchTerm : ""}
      onChange = {handleChanges}
    ></textarea>
    </div>
    <div className={styles.body}>
    <textarea
      onClick={()=>change()}
      placeholder="Insert total caption"
      maxLength="160"
      value = {button ? searchTerm : ""}
      onChange = {handleChanges}
    ></textarea>
    </div>
    <div className={styles.author}>
    <textarea
      onClick={()=>change()}
      placeholder="Insert author's name"
      maxLength="160"
      value = {button ? searchTerm : ""}
      onChange = {handleChanges}
    ></textarea>
    </div>
    <div className={styles.tags}>
    <textarea
      onClick={()=>change()}
      placeholder="Insert post's tags"
      maxLength="160"
      value = {button ? searchTerm : ""}
      onChange = {handleChanges}
    ></textarea>
    </div>
    <div className={styles.slug}>
    <textarea
      onClick={()=>change()}
      placeholder="Insert unique tag for a web path"
      maxLength="160"
      value = {button ? searchTerm : ""}
      onChange = {handleChanges}
    ></textarea>
    </div>
    <div className = {styles.date}>
        <div className={styles.divText}>Choose time of creation</div>
        <button className={styles.chooseDate} onClick={()=>change()}>Modificate date</button>
    </div>
    {button ? (
            <div className={styles.commentButtons}>
              <button
                className={styles.button1}
                onClick={clearIt}
              >
                REMOVE
              </button>
              <button className={styles.button2} onClick = {()=>isValid()}>SUBMIT</button>
            </div>
          ) : (
            ""
    ) }

</div>
  )
}

export default AddNewFeed