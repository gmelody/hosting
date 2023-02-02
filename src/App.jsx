import './App.css'
import Table2 from './components/Table2.jsx'
import { React, useState } from 'react'
import Suggestion from './components/Suggestion.jsx'


export default function App() {

  let waitingTime = 30; //later will be a function of how many people are in the restuarant
  
  let tablesData = [
    {tableNum: 1, capacity: 8, totalNum: 0, timeLeft: waitingTime},
    {tableNum: 2, capacity: 8, totalNum: 0, timeLeft: waitingTime},
    {tableNum: 3, capacity: 8, totalNum: 0, timeLeft: waitingTime},
    {tableNum: 4, capacity: 8, totalNum: 0, timeLeft: waitingTime}
  ];

  const updateNum = (tableNum, totalNum) => {
    let i = tablesData.findIndex(item => item.tableNum === tableNum)
    tablesData[i].totalNum = totalNum
    console.log(tablesData)
  }

  const updateTime = (tableNum, timeLeft) => {
    let i = tablesData.findIndex(item => item.tableNum === tableNum)
    tablesData[i].timeLeft = timeLeft
  }
  
  return (
    <main>
      <div>
        <Suggestion tablesData={tablesData} />
        <div class='myTables'>
          {tablesData.map(table => <Table2 table={{tableNum: table.tableNum, capacity: table.capacity, totalNum: table.totalNum}}
                                    onUpdateNum={ updateNum } onUpdateTime={ updateTime } />)} 
        </div>
        
      </div>
      
    </main>
  )
}
