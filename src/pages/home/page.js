

import React from 'react'
import obj2json from './obj2json'
// import { clearTimeout } from 'timers'
const style = require('./style.css')




class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count: 0
    }
  }

  componentDidMount(){
    
    let obj = {
      type:[1,2,3,4],
      name:{
        hh:{
          aa:'cc'
        },
        bb:{
          dd:'ff'
        }
      }
    }
    // console.log(JSON.stringify(obj))
    // let objs = this.transform2(obj)

    console.log( JSON.stringify(obj2json(obj)) )
  }


  mouseMove = () => {
    // 节流
    let that = this 
    
    let count = that.state.count +1
    this.debounce( () => this.setState({ count }), 300  )()
  }

  debounce = (fnc, waite) =>{
    return () => {
      if(this.timer){
        clearTimeout(this.timer)
      }
      this.timer = setTimeout( fnc, waite )
    }
  }



  render(){
    const { count } = this.state
    console.log(this.state)
    return(
      <div className="ls">
        <div className={ style.content }  onMouseMove={ this.mouseMove } >{count}</div>
        {/* <Button>点击</Button> */}
      </div>
    )
  }
}

export default Home