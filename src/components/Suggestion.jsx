
import { React, useState } from 'react'

export default function Suggestion(props) {
  
  const [numPpl, setNumPpl] = useState(0);
  const [bestTable, setBestTable] = useState();
    
  const handleChange = (e) => {
    setNumPpl(e.target.value)
  }

  const handleClick = () => {
    
    let data = props.tablesData
    let minTime = 30
    for (let i=0; i < data.length; i++) {
      if (parseFloat(numPpl) + parseFloat(data[i].totalNum) <= data[i].capacity) {
        if (data[i].timeLeft<minTime) {
          minTime = data[i].timeLeft
          
        }
      }
    }
    let bt = data.find(table => table.timeLeft === minTime)
    setBestTable(bt.tableNum)
    setNumPpl(0)
  }
  
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={numPpl}>
      </input>
      <button onClick={handleClick}>Suggest</button>
      <p>Seat at { bestTable }</p>
    </div>
  );
}
