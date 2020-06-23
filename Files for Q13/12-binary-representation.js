/* 12. Binary Representation ------------------------------------------------------------------ */

let ticks = 0

function numToBinary(num, string=''){
  //base case
  if(num == 0 && string == ''){
    ticks++
    return '0'
  } else if(num == 0 && string != '') {
    ticks++
    return string
  }


  //general case
  if(num != 0){
    ticks++
    let quotient = Math.floor(num / 2)
    let remainder = num % 2
    remainder += string 
    return numToBinary(quotient, remainder)
  }
  
}
numToBinary(0)
console.log({ticks})
ticks=0

numToBinary(3)
console.log({ticks})
ticks=0

numToBinary(25)
console.log({ticks})
ticks=0




//node 12-binary-representation.js