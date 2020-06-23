/* 3. Reverse String ------------------------------------------------------------------ */

let ticks = 0

function reverseString(string) {
    //base case
    if(string.length === 1){
        ticks++;
        return string;
    }
    //general case
    ticks++;
    return string.slice(-1) + reverseString(string.slice(0,string.length-1))   
}

reverseString("a");
console.log({ticks})
ticks=0

reverseString("ab");
console.log({ticks})
ticks=0

reverseString("abs");
console.log({ticks})
ticks=0

reverseString("absolute");
console.log({ticks})
ticks=0


reverseString("abracadabra-thingamajig");
console.log({ticks})
ticks=0



//node 3-reverse-string.js