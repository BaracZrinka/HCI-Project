import React, { useState } from "react"
import styles from "./style.module.css"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/free-solid-svg-icons"
import { faEdit } from "@fortawesome/free-solid-svg-icons"

const AddNewFeed = () => {
  const [button, setButton] = useState(false)
  const [count, setCount] = useState(1)
  const [calendar, setCalendar] = useState("")
  const [check, setCheck] = useState(false)
  const change = property => {
    setCount(count + 1)
    setButton(true)
    if (property) {
      setCalendar(
        <Calendar
          onChange={onDateChange}
          value={date}
          showNeighboringMonth={false}
          locale={"en-US"}
        />
      )
      setCheck(true)
    }
  }

  const [date, setDate] = useState(new Date())

  const onDateChange = newDate => {
    setDate(newDate)
    console.log(newDate)
  }

  let isValid = () => {
    if (count === 9) {
      alert("Your post is ready to post!  :)")
    } else {
      alert("All fields must be filled!")
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.wholeBlog}>
        <div className={styles.add}>Add new post</div>
        <div className={styles.textareaDescription}>Title</div>
        <div className={styles.text}>
          <textarea
            onClick={change}
            placeholder="Insert title"
            maxLength="160"
            className={styles.textarea2}
          ></textarea>
        </div>
        <div className={styles.charNumber}>Maximum 160 characters</div>
        <div className={styles.pictureDiv}>
          <button className={styles.insert} onClick={change}>
            <FontAwesomeIcon icon={faImage} size="1x" color="#11111" />
            &nbsp;&nbsp;Insert cover image file
          </button>
        </div>
        <div className={styles.textareaDescription}>Summary</div>
        <div className={styles.text}>
          <textarea
            onClick={change}
            placeholder="Insert summary"
            maxLength="5000"
            rows="10"
            className={styles.textarea2}
          ></textarea>
        </div>
        <div className={styles.charNumber}>Maximum 5000 characters</div>
        <div className={styles.textareaDescription}>Body</div>
        <div className={styles.text}>
          <textarea
            onClick={change}
            placeholder="Insert post's body"
            maxLength="70000"
            rows="23"
            className={styles.textarea2}
          ></textarea>
        </div>
        <div className={styles.charNumber}>Maximum 70000 characters</div>
        <div className={styles.textareaDescription}>Author's name</div>
        <div className={styles.text}>
          <textarea
            onClick={change}
            placeholder="Insert author's name"
            maxLength="160"
            className={styles.textarea2}
          ></textarea>
        </div>
        <div className={styles.charNumber}>Maximum 160 characters</div>
        <div className={styles.textareaDescription}>Tags</div>
        <div className={styles.text}>
          <textarea
            onClick={change}
            placeholder="Insert post's tags"
            maxLength="160"
            className={styles.textarea2}
          ></textarea>
        </div>
        <div className={styles.charNumber}>Maximum 160 characters</div>
        <div className={styles.textareaDescription}>Unique tag</div>
        <div className={styles.text}>
          <textarea
            onClick={change}
            placeholder="Insert unique tag for a web path"
            maxLength="160"
            className={styles.textarea2}
          ></textarea>
        </div>
        <div className={styles.charNumber}>Maximum 160 characters</div>
        <div className={styles.date}>
          <div className={styles.modifyDescription}>
            Choose time of creation:&nbsp;&nbsp;
          </div>
          <button className={styles.insert} onClick={() => change("calendar")}>
            <FontAwesomeIcon icon={faEdit} size="1x" color="#11111" />
            &nbsp;&nbsp;Modify date
          </button>
        </div>
        {check ? calendar : ""}
        {button ? (
          <div className={styles.submitButtons}>
            <button className={styles.button1} onClick={() => setButton(false)}>
              Cancel
            </button>
            <button className={styles.button2} onClick={() => isValid()}>
              Submit
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  )
}

export default AddNewFeed
