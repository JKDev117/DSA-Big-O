//#9. Random element

//Q. What is the Big O of the following algorithm? Explain your answer

//Answer: 0(1) because regardless of size of array, it will take same amount of time to complete.

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}



//node 9-random-element.js