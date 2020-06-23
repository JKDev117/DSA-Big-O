/* 12. Binary Representation ------------------------------------------------------------------ */

function numToBinary(num, string=''){
  //base case
  if(num == 0 && string == ''){
    return '0'
  } else if(num == 0 && string != '') {
    return string
  }


  //general case
  if(num != 0){
    let quotient = Math.floor(num / 2)
    let remainder = num % 2
    remainder += string 
    return numToBinary(quotient, remainder)
  }
  

}

console.log(numToBinary(3));
//console.log(numToBinary(25));
//console.log(numToBinary(0));



/*
    input to program: 3
    output of the program: 11 
    input to each recursive call:
        (1, "1")
        (0, "11")
    output of each recursive call:
        "11"
        "11"
-------------------------------------------------------------------------------------- */

//node 12-binary-representation.js