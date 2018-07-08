

// const checkType = 

const transform = (arg, obj={}) => {
  if( typeof arg !== 'object' ){
    console.error('type error, arg type should be object, but recived' + typeof arg)
  }
  for(let key in arg){
    let type = typeof arg[key];
    if(type==='object'&&!Array.isArray(arg[type])){
      obj[key] = {
        type: 'object',
        properties: {

        }
      }
      transform( arg[key], obj[key].properties )
    }
    if(type==='object'&&Array.isArray(arg[key])){
      obj[key] = {
        type :'array',
        items: {

        }
      }
      transform( arg[key], obj[key].items )
    }
    if(type ==='string'){
      obj[key] = {
        type:'string',
        description: arg[key]
      }
    }
    if(type ==='number'){
      obj[key] = {
        type: 'integer',
        description: arg[key]
      }
    }
  }
  return obj
}

// const obj2json = function(obj){
//   let obj2 = transform(obj)
//   return obj2

// }
function obj2json(obj){
  let obj2 = transform(obj)
  return obj2
}

export default obj2json