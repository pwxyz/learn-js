

import React from 'react'
// import { clearTimeout } from 'timers'
const style = require('./style.css')



class Home extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count: 0
    }
  }


  mouseMove = () => {
    // 节流
    let that = this 
    
    let count = that.state.count +1
    // if(that.timer) {
    //   clearTimeout(that.timer)
    // }
    // that.timer = setTimeout( () => that.setState({ count }), 300  )

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
    return(
      <div className="ls">
        <div className={ style.content }  onMouseMove={ this.mouseMove } >{count}</div>
        {/* <Button>点击</Button> */}
      </div>
    )
  }
}

export default Home