

import React from 'react'
// import obj2json from './obj2json'
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
    
  }


  mouseMove = e => {
    // 节流
    // this.debounce(this.doSome , 300  )()
    this.debounce2( this.doSome, 300 )()
  }

  doSome = e => {
    console.log('e',e)
    this.setState({ count: this.state.count+1 })
  }

  // debounce = (fnc, waite) =>{
  //   return e => {
  //     // let arg = arguments
  //     if(this.timer){
  //       clearTimeout(this.timer)
  //     }
  //     this.timer = setTimeout( fnc, waite )
  //   }
  // }

  debounce2(fnc, waite ){
    let that = this
    return function(){
      // let that = this 
      let arg = arguments 
      if(that.timer){
        clearTimeout(that.timer)
      }
      that.timer = setTimeout( function(){
       fnc.apply(that,arg) }, waite )
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