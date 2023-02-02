import { React, useRef, useState } from 'react'
import './Table2.css'

export default function Table2(props) {
  const [totalNum, setTotalNum] = useState(props.table.totalNum);
  const [newNum, setNewNum] = useState(0);
  
  const handleChange = (e) => {
    setNewNum(e.target.value)
  }

  const [showTime, setShowTime] = useState(); 
  const timeLeft = useRef(30);
  
  const handleClick = () => {

    if (totalNum == 0 && newNum != 0) {
      const interval = setInterval(() => {
        timeLeft.current = timeLeft.current-1
        setShowTime(timeLeft.current)
        props.onUpdateTime(props.table.tableNum, timeLeft.current)
        if (timeLeft.current <= 0) {
          clearInterval(interval);
        }
      }, 3000)
      setShowTime()
      timeLeft.current = 30
    }
    
    let total = parseFloat(totalNum) + parseFloat(newNum)
    if (total <= props.table.capacity) {
      setTotalNum(total)
      setNewNum(0)
      props.onUpdateNum(props.table.tableNum, total)
    } else {
      alert("too many")
    }
    
  }

  const clearTable = () => {
    props.onUpdateNum(props.table.tableNum, 0)
    setTotalNum(0)
    props.onUpdateTime(props.table.tableNum, 0)
    timeLeft.current = 0
    setShowTime(timeLeft.current)
  }

  return (
    <div class="table">
      <p>Table #{props.table.tableNum}</p>
      <br></br>
      <p>people: {totalNum}</p>
      <br></br>
      <input
        type="text"
        onChange={handleChange}
        value={newNum}>
      </input>
      <button onClick={handleClick}>add</button>
      <p>Time Left: {showTime}</p>
      <button onClick={clearTable}>Clear</button>
    </div>
  )
}

//td: if timeleft = 0, alert onclick add button, formatting, confirm suggestion, add tables, maybe do servers? 