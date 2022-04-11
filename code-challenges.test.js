// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

//Pseudo Code 
// take a # > 2 and returns an array that length
// reference fib seq 
// let x = 0, y = 1, z = x+y
// loop and add each new iteration to an array to log fib series
// use .unshift/.push/ maybe .map? 


const fibLog = (num) => {
    let n1 = 0, n2 = 1, nextNumber
    let fibArray = []
    for (i = 1; i <= num; i++) 
    {
        nextNumber = n1+n2
        n1 = n2
        n2 = nextNumber
        fibArray.push(n1)
        
    }
      return fibArray
}

// a) Create a test with expect statements for each of the variables provided.

describe("fibLog", () => {
    it("returns an array containing the numbers of the Fibonacci sequence up to the number entered as an argument", () => {
      expect(fibLog(6)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibLog(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])

    })
  })

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.


// a) Create a test with expect statements for each of the variables provided.

describe("oddOnlyLowToHigh", () => {
    it("returns an array containing the numbers of the Fibonacci sequence up to the number entered as an argument", () => {
      expect(oddOnlyLowToHigh(fullArr1)).toEqual([-9, 7, 9, 199])
      expect(oddOnlyLowToHigh(fullArr2)).toEqual([-823, 7, 23])

    })
  })




const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

//Pseudo Code
// filter array by data type to get numbers only 
// filter numbers to get odd only
// sort numbers low to high

const oddOnlyLowToHigh = (array) => {
    const numOnly = (array) => {
        if (typeof(array) === 'number') {
            return array
        }
    }
    let numbers = array.filter(numOnly)
    return numbers.filter(value => value %2 !== 0).sort((a, b)=> a - b)
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("prevNumSum", () => {
    it("adds the previous value of the array to each new position in the array", () => {
        expect(prevNumSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(prevNumSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(prevNumSum(numbersToAdd3)).toEqual([])

    })
  })

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.

//Pseudocode 
//take an array of numbers add then in sequence, n1 + n2 -> n2 + n3 
//have array = sum of previous array/values
//.map to run over every value of array 
// return new array

const prevNumSum = (arr) =>{
    let array = [],sum
    array = arr.map(value => sum = (sum || 0 )+ value)
    return array
}
