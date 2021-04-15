import React, { useState } from "react"
import styles from "./style.module.css"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

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
    <div className={styles.wholeBlog}>
      <div className={styles.add}>Add new post</div>
      <div className={styles.text}>
        <textarea
          onClick={change}
          placeholder="Insert title"
          maxLength="160"
        ></textarea>
      </div>
      <div className={styles.pictureDiv}>
        <div>Cover Image</div>
        <button className={styles.insert} onClick={change}>
          Insert file
        </button>
      </div>

      <div className={styles.summary}>
        <textarea
          onClick={change}
          placeholder="Insert summary"
          maxLength="160"
        ></textarea>
      </div>
      <div className={styles.body}>
        <textarea
          onClick={change}
          placeholder="Insert total caption"
          maxLength="160"
        ></textarea>
      </div>
      <div className={styles.author}>
        <textarea
          onClick={change}
          placeholder="Insert author's name"
          maxLength="160"
        ></textarea>
      </div>
      <div className={styles.tags}>
        <textarea
          onClick={change}
          placeholder="Insert post's tags"
          maxLength="160"
        ></textarea>
      </div>
      <div className={styles.slug}>
        <textarea
          onClick={change}
          placeholder="Insert unique tag for a web path"
          maxLength="160"
        ></textarea>
      </div>
      <div className={styles.date}>
        <div className={styles.divText}>Choose time of creation</div>
        <button
          className={styles.chooseDate}
          onClick={() => change("calendar")}
        >
          Modificate date
        </button>
      </div>
      {check ? calendar : ""}
      {button ? (
        <div className={styles.commentButtons}>
          <button className={styles.button1} onClick={() => setButton(false)}>
            REMOVE
          </button>
          <button className={styles.button2} onClick={() => isValid()}>
            SUBMIT
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default AddNewFeed