import React from "react"

export default class TableClass {
  constructor(tableNum, capacity, numOfPpl) {
    this.num = tableNum;
    this.numOfPpl = 0;
  }
  
  get tableNum() {
    return this.tableNum;
  }

  get capacity() {
    return this.capacity;
  }

  start() {
    this.startTime = now();
  }

  clean() {
    this.startTime = undefined;
    this.numOfPpl = 0;
  }
  
  get getNumOfPpl() {
    return this.numOfPpl;
  }

  set setNumOfPpl(newNumOfPpl) {
    this.numOfPpl = newNumOfPpl;
  }
  
  addPpl(num) {
      this.numOfPpl += num;
  }

}