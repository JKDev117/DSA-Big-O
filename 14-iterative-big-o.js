//#14. Iterative Big O
//node 14-iterative-big-o

/*
Task: Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.

Answers:
    1. counting sheep = O(n)
    2. power calculator = O(n) 
    3. reverse string = O(n)
    4. nth triangular number = O(n)
    5. string splitter = O(n) //Note: for the recursive version I calculated is O(2n)
    6. fibonacci = O(n) //Note: for the recursive version I calculated is O(2n)
    7. factorial = O(n)


*/


//1. Counting Sheep
let ticks = 0

function countSheep(n){  
    for(let i=n; i>=0; i--){
        ticks++
        if(i===0){
            //console.log(`All sheep jumped over the fence`)
        } else {
            //console.log(`${i}: Another sheep jumps over the fence`)
        }
    }
}

countSheep(0)
console.log(ticks)
ticks = 0

countSheep(3)
console.log(ticks)
ticks = 0
console.log('--------------------------------------')


//2. Power Calculator

let ticks2 = 0

function powerCalculator(base, exponent){
    ticks2++
    let val=base
    if(exponent===0){
        return 1
    }
    if(exponent===1){
        return base
    }
    for(let i=exponent; i>1; i--){
        ticks2++
        val*=base
    }
    return val
}

powerCalculator(2, 0)
console.log(ticks2)
ticks2 = 0

powerCalculator(2, 1)
console.log(ticks2)
ticks2 = 0

powerCalculator(2, 2)
console.log(ticks2)
ticks2 = 0

powerCalculator(2, 3)
console.log(ticks2)
ticks2 = 0

console.log('--------------------------------------')


//3. Reverse String
let ticks3 =  0

function reverseString(string){
    ticks3++
    if(string.length <= 1){
        ticks3++
        return string
    }
    const arr1 = string.split('')
    const arr2 = []
    for(let i=0; i < string.length; i++){
        ticks3++
        arr2.push(arr1.pop())
        //console.log(arr2)
    }
    return arr2.join('')
}

reverseString("ab")
console.log(ticks3)
ticks3 = 0

reverseString("abcdefg")
console.log(ticks3)
ticks3 = 0

console.log('--------------------------------------')


//4. nth Triangular number
let ticks4=0

function nthTriangularNum(num){

    if(num===1){
        ticks4++
        return num
    }
    if(num > 1){
        ticks4++
        let val = 0
        for(let i=1; i<=num; i++){
            ticks4++
            val+=i
        }
        return val
    }
}
nthTriangularNum(1)
console.log(ticks4)
ticks4 = 0

nthTriangularNum(2)
console.log(ticks4)
ticks4 = 0

nthTriangularNum(3)
console.log(ticks4)
ticks4 = 0

nthTriangularNum(4)
console.log(ticks4)
ticks4 = 0

console.log('--------------------------------------')


//5. String Splitter
let ticks5 = 0

function stringSplit(string){
    ticks5++
    const array = []
    let word = ''
    for(let i = 0; i<string.length; i++){
        ticks5++
        if(string.charAt(i) != '/'){
            word += string.charAt(i)
        } else {
            array.push(word)
            word = ''
        }
    }
    array.push(word)
    return array
}

stringSplit("")
console.log({n: "", ticks5})
ticks5 = 0

stringSplit("2020")
console.log({n: "2020", ticks5})
ticks5 = 0

stringSplit("02/20/2020")
console.log({n: "02/20/2020", ticks5})
ticks5 = 0

console.log('--------------------------------------')


//6. Fibonacci
let ticks6 = 0

function fibonacci(num){
    const array = [1, 1]
    ticks6++
    if(num==0){
        return []
    } else if(num==1){
        return [1]
    } else if(num==2){
        return [1, 1]
    } else {
        for(let i=2; i<num; i++){
            ticks6++
            array.push(array[i-2]+array[i-1])
        }
        return array
    }
}

fibonacci(0)
console.log({n: 0, ticks6})
ticks6 = 0

fibonacci(1)
console.log({n: 1, ticks6})
ticks6 = 0

fibonacci(2)
console.log({n: 2, ticks6})
ticks6 = 0

fibonacci(7)
console.log({n: 7, ticks6})
ticks6 = 0


console.log('--------------------------------------')


//7. Factorial
let ticks7 = 0

function factorial(num){
    ticks7++
    if(num >=0 && num < 3){
        return num
    }
    if(num >= 3){
        let val=num
        for(let i=num-1; i>0; i--){
            ticks7++
            val *= i
        }
        return val
    }
}
factorial(1)
console.log(ticks7)
ticks7 = 0

factorial(2)
console.log(ticks7)
ticks7 = 0

factorial(3)
console.log(ticks7)
ticks7 = 0

factorial(4)
console.log(ticks7)
ticks7 = 0

factorial(5)
console.log(ticks7)
ticks7 = 0


