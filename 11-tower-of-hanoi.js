//#11. Tower of Hanoi

/*
Q. If you are given 5 disks, how do the rods look like after 7 recursive calls?
A. [ 5, 4 ] [] [ 3, 2, 1 ] 

Q. How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
A. 7 moves for 3 disks, 15 moves for 4 disks, 31 moves for 5 disks

Q. What is the runtime of your algorithm?
A. O(2^n) exponential time complexity
*/

let ticks = 0;

function move(n, source, target, auxiliary){
    if (n > 0) {
        ticks++;

        //move n - 1 disks from source to auxiliary, so they are out of the way
        move(n - 1, source, auxiliary, target)

        //move the nth disk from source to target
        target.push(source.pop())

        //display our progress
        console.log(source, auxiliary, target, '\n')

        //move the n - 1 disks that we left on auxiliary onto target
        move(n - 1, auxiliary, target, source)
    }
}


/******* copy & past test code below this line *********/

const source = [5, 4, 3, 2, 1]
const auxiliary = []
const target = []

//initiate call from source to target with auxiliary
move(5, source, target, auxiliary)

/******* copy & past test code ^^ above this line *********/

console.log(ticks)



/* Copy & paste test data for [3, 2, 1] --------------------------- /
    const source = [3, 2, 1]
    const auxiliary = []
    const target = []

    //initiate call from source to target with auxiliary
    move(3, source, target, auxiliary)
---------------------------------------------------- */



/* Copy & paste test data for [4, 3, 2, 1] --------------------------- /
    const source = [4, 3, 2, 1]
    const auxiliary = []
    const target = []

    //initiate call from source to target with auxiliary
    move(4, source, target, auxiliary)
---------------------------------------------------- */



/* Copy & paste test data for [5, 4, 3, 2, 1] --------------------- /
    const source = [5, 4, 3, 2, 1]
    const auxiliary = []
    const target = []

    //initiate call from source to target with auxiliary
    move(5, source, target, auxiliary)
---------------------------------------------------- */


//node 11-tower-of-hanoi.js
