var isSquare = function(arr){
  arr.forEach(function(element){
   if(element% Math.sqrt(element)===0){
     console.log(true)
   }else if(arr.length===0){
     console.log(undefined);
   }else console.log(false)
  })
}
