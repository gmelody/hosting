
import { React, useState } from 'react'
import Table2 from './Table2.jsx'
import './TableArr.css'

export default function TableArr() {
  
  let tablesData = [
    {tableNum: 1, capacity:8},
    {tableNum: 2, capacity:8},
    {tableNum: 3, capacity:8},
    {tableNum: 4, capacity:8},
    {tableNum: 5, capacity:8},
    {tableNum: 6, capacity:8}
  ];

  return(
    <div class='myTables'>
       {tablesData.map(table => <Table2 table={{tableNum: table.tableNum, capacity: table.capacity}}/> )} 
    </div>
  );
}