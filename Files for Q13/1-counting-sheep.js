/* 1. Counting Sheep ------------------------------------------------------------------ */

let ticks = 0;

function countSheep(number) {

    //base case
    if(number===0){      
        ticks++
        //console.log("All sheep jump over the fence.");
        return {ticks};
    }
    //general case
    //console.log(`${number}: Another sheep jumps over the fence`);
    ticks++;
    return countSheep(number - 1);

}

console.log(countSheep(0));
ticks = 0

console.log(countSheep(1));
ticks = 0

console.log(countSheep(3));
ticks = 0

console.log(countSheep(13));

//node 1-counting-sheep.js