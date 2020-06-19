//#8. An efficient search

/* In this example, we return to the problem of searching using a more sophisticated approach than in naive search. 
Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer */

//Answer: O(log(n)) because running time increases slowly relative to increase in input size

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;
    let ticks = 0;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
            ticks ++;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
            ticks ++;
        }
        else {
            ticks ++;
            return {currentIndex, input: array.length, ticks};
        }
    }
    return -1;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 
    81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 
    91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

const a = efficientSearch(arr1, 5) 
const b = efficientSearch(arr2, 5)

console.log(a)
console.log(b)

//node 8-efficient-search




