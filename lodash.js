let _ = {
    clamp: function( number, lower, upper){
      let lowerClampedValue = Math.max(number,lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue
    },
    inRange: function( number, start, end){
      let newStart = start;
      let newEnd = end
      //if end is not provided
      if( end === undefined){
        newStart = 0 
        newEnd = start
      }
      //if start is larger than end
      if(start > end) {
        newStart = end;
        newEnd = start
      }
      //Main function
      if(number >= newStart && number < newEnd){
        return true
      } else {
        return false
      }
    },
    words: function (string) {
      return string.split(" ")
    },
    pad: function(string, spaces) {
      let begin = 0;
      let end = 0;
      let length =  spaces - string.length
      let rem = length % 2
  
      
      if( string.length >= spaces){
        return string
      } else if ( rem === 0) {
         begin = length/2
         end = length/2
             console.log(begin)
  
      } else {
        let even = length - 1
         begin = even/2
         end = even/2 + 1
        
      }
      
      let newString = string.split("");
      
      for(let i = 0; i < begin; i++){
        newString.unshift(" ")
      }
       for(let i = 0; i < end; i++){
        newString.push(" ")
        
      }
      return newString.join("")
    },
    has: function(obj, key){
    
      let objKeys = Object.keys(obj)
      if(objKeys.includes(key)){
        if(obj.key){
          return true
        }
        }else{
          return false
        }
      
    },
    invert: function(obj) {
        let newObj = {}
        for (const key in obj) {
        const origVal = obj[key]
        newObj[origVal] = key
      }
      return newObj
    },
    findKey: function(object, predicate) {
      for (key in object) {
        let value = object[key]
        let predicateReturnValue = predicate(value) 
        if (predicateReturnValue) {
          return key
        }
      }
      return undefined 
    },
    drop: function(arr, num){
      if(!num){
        return arr.slice(1)
      } else{
        return arr.slice(num)
      }
    },
    dropWhile: function(arr, predicate){
      let dropNumber = arr.findIndex((element, index) => {
        return !predicate(element, index, arr)
        
      })
      let droppedArray = this.drop(arr, dropNumber)
      return droppedArray
    },
    chunk: function(arr, size=1){
      
      let newArr = []
      for(let i = 0; i < arr.length;i+= size ){
        let chunk = arr.slice(i, i+size);
        newArr.push(chunk)
      }
      return newArr
    }
  
  }
  
  
  
  

  module.exports = _;