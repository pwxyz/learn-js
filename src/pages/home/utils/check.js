
const res ={
  title:'string',
  type:'string',
  person:{
    name:{},
    age:1,
    address:'string'
  },
  hah:'string'
}

const obj = {
  title:'检测',
  type:'check',
  person:{
    name:'bob',
    age:15
  },
  friend:['jhon','check']
}
//错误信息储藏
const errInfo = {

}

const getType = arg => typeof arg

const isArray = arg => {
  if(Array.isArray){
    return Array.isArray(arg)
  }
  else {
    console.error('Array.isArray不存在')
    return false
  }
}

const addErr = value => {
  errInfo[value] = value
}

const verifyObj = (obj, obj2) => {
  let arr = Object.entires(obj)
  let arr2 = Object.entires(obj2)
  if(arr.length!==arr2.length){
    addErr(obj)
    return false
  }
  return verifyArr( arr, arr2 )
}

const verifyArr = ( arr , arr2 ) => {
  if(arr.length!==arr2.length) {
    return false
  }
  for(let i=0;i<arr.length;i++){
    if(!arr2.includes(arr[i])){
      addErr(arr[i])
      return false
    }
  }
  return true
}

const check  = ( arg, compare ) => {
  if(getType(arg)!==getType(compare)){
    addErr(arg)
  }
  let type = getType(arg)
  if(type==='string'||type==='boolean'||type==='number'){
    if(compare!==arg) {
      addErr(arg)
    }
  }
  else if(type==='object'){
    if(isArray(arg)){
      
      for(let i =0;i<arg.length; i++){
        check(arg[i], compare[i] )
      }
    }
    else{
      for(let key in arg){

      }
    }
  }
}