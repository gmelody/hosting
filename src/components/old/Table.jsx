import TableClass from "../data/tableClass.js"
import { React, Component, useEffect } from 'react'

export default class Table extends Component {

  constructor(props) {
    super(props)
    this.props = props
    //let $this = this;
    this.state = {
      totalNum: props.table.totalNum,
      newNum: 0,
      timer: 5
    };
    this.tick = this.tick.bind(this);
    
    this.handleChange = (e) =>  {
      this.setState({newNum: e.target.value});
    }
    
    this.handleClick = () => {
      // record opening time
      // this.tick();
      
      // add people
      let total = parseFloat(this.state.totalNum) + parseFloat(this.state.newNum)
      if (total <= this.props.table.capacity) {
        this.setState({totalNum: total})
      } else {
        alert("too many people")
      }
      
    }
  }

  tick() {
    this.interval = setInterval(() => {
      this.setState({timer: parseFloat(this.state.timer) - 1});
      if (this.state.timer == 0) {
        alert("close")
        clearInterval(this.interval)
      }
    }, 1000);
    
  }
  
  
  
  render() {
    return (
      <div>
          Table #{this.props.table.tableNum} 
          <br></br>
          people: {this.state.totalNum}
        <div>
          <input 
            type="text"
            onChange={this.handleChange}
            value={this.state.newNum}></input>
          <button onClick={this.handleClick}>add</button>
        </div>
      </div>
      
    )
  }
}

