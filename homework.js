// 1) Create a function to calculate the sum of the two given integers. If the two values are the same, then returns the triple of their sum.
const sum = function(n1,n2){
    if(n1 === n2){
        return (n1 + n2) * 3
    } else {
        return (n1 + n2) 
    }
}
// console.log("Ex - 1: " + sum(2, 2))
// ================================================================================

// 2) Create a function to check two given numbers. Return true if one of the numbers is 50, or if their sum is 50.

const checkTwoNumbers = function(n1, n2){
    return (n1===50 ? true : n2===50 ? true : n1+n2===50 ? true : false)
}
// console.log("Ex - 2: " + checkTwoNumbers(25, 2))
// ================================================================================

// 3) Create a function to remove a character at the specified position of a given string and return the new string.

const removeChar = function(pos, str){
    return str.slice(0, pos) + str.slice(pos+1)
}
// console.log("Ex - 3: " + removeChar(2, 'Strive'))
// ================================================================================

// 4) Create a function to find the largest of three given integers.
const largest = function(n1, n2, n3){
   let large = n1
   if(n2 >= n1) {
       large = n2
   }
   if(n3 >= large){
       large = n3
   }
   return large
}
// console.log("Ex - 4: " + largest(10, 7, 1))
// ================================================================================

// 5) Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
const inRange = function(n1){
    if(n1 >= 40 && n1 <= 60) {
        return  `${n1} is in range 40...60`
    } else if (n1 >= 70 && n1 <= 100){
        return  `${n1} is in range 70...100`
    } else {
        return `${n1} is NOT in any range`
    }
}
const checkRange = function(n1, n2){
    return `${inRange(n1)} and ${inRange(n2)}`
}
// console.log("Ex - 5: " + checkRange(40, 70))
// ================================================================================

// 6)  Create a function that creates and returns the specified number of copies of a given string (positive number).
const createCopies = function(copies, str){
    let copyArr = ['']
    for(i=0; i<copies; i++){
        copyArr[i] = str
    }
    return copyArr
}
// console.log("Ex - 6: " + createCopies(10, 'Strive'))
// ================================================================================

// 7) Create a function that returns the city name of a given string, if the string begins with "Los" or "New", otherwise returns blank.
const cityName = function(str){
    if(str.includes('Los')) {
        return 'Angeles'
    } else if (str.includes('New')){
        return 'York'
    }
}
// console.log("Ex - 7: " + cityName('New Strive'))
// ================================================================================

// 8) Create a function to calculate the sum of three elements of a given array of integers of length 3.
const sumArrElements = function(arr){
    let sum = 0
    for(i=0; i<3; i++){
        sum = sum + arr[i]
    }
    return sum
}
// console.log("Ex - 8: " + sumArrElements([2,5,4]))
// ================================================================================

// 9) Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
const arrTestContain = function(arr){
    return (arr.includes(1) ? `${arr} contains 1` : (arr.includes(3)) ? `${arr} contains 3` : `${arr} doesn't contains 1 nor 3`)
}
// console.log("Ex - 9: " + arrTestContain([3,7]))
// ================================================================================

// 10) Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
const arrTestNotContain = function(arr){
    return (arr.includes(1) ? `${arr} contains 1` : (arr.includes(3)) ? `${arr} contains 3` : `${arr} doesn't contains 1 nor 3`)
}
// console.log("Ex - 10: " + arrTestNotContain([9,7]))
// ================================================================================

// 11) Create a function to find the longest string from a given array of strings.
const longStr = function(arr){
    let long = []
    for(let i=0; i<arr.length; i++){
        if (arr[i].length > long.length){
            long = arr[i]
        }
    }
    return long
}
// console.log("Ex - 11: " + longStr(['one', 'three', 'strivers', 'two', 'me']))
// ================================================================================

// 12) Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     Obtuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

const angleType = function(ang){
    return ((ang>=0 && ang < 90) ? `${ang} is an Acute angle` :
            (ang === 90) ? `${ang} is a Right angle` :
            (ang>=90 && ang < 180) ? `${ang} is an Obtuse angle` :
            (ang === 180) ? `${ang} is a Straight angle` : `${ang} is a Reflex angle` )
}
// console.log("Ex - 12: " + angleType(181))
// ================================================================================

// 13) Create a function to find the index of the greatest element of a given array of integers
const greatestElement = function(arr){
    let max = -100000000
    let index 
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
            index = i
        }
    }
    return index
}
// console.log("Ex - 13: " + greatestElement([1,2,3,4,50,6,7,8,9]))
// ================================================================================

// 14) Create a function to get the largest even number from an array of integers.
const largestEven = function(arr){
    let max = -1000000
    for(let i=0; i<arr.length; i++){
        if((arr[i] % 2 === 0) && (arr[i] > max)){
                max = arr[i]
        }
    }
    return max
}
// console.log("Ex - 14: " + largestEven([1,2,30,45,5,6,77,8,9]))
// ================================================================================

// 15) Create a function to check from two given integers, whether one is positive and another one is negative.
const checkOneNegative = function(n1, n2){
        return ((n1 * n2 < 0) ? `One of the given numbers is positive and the other is negative` : `Both numbers are either positive or negative`)
}
// console.log("Ex - 15: " + checkOneNegative (-2, 4))
// ================================================================================

// 16) Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

const newString = function(str){
    return ((str.length < 3) ? str.toUpperCase() : str.slice(0, 3).toUpperCase() + str.slice(3) )
}
// console.log("Ex - 16: " + newString ('strivers'))
// ================================================================================

// 17) Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
const sumInRange = function(n1, n2){
    return ((n1 + n2 >= 50 && n1 + n2 <= 80) ? 65 : 80)
}
// console.log("Ex - 17: " + sumInRange(20, 30))
// ================================================================================

// 18) Create a function to convert a number to a string, the content of which depends on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".
const numberToString = function(n1){
    let newStr = ''
    for(let i=1; i<=n1; i++){
        if((n1 % i === 0) && (i === 3)){
            newStr += 'Diego'
        }
        if((n1 % i === 0) && (i === 5)){
            newStr += 'Riccardo'
        }
        if((n1 % i === 0) && (i === 7)){
            newStr += 'Stefano'
        } 
    }
    if( newStr.length === 0){
        newStr = n1
    }
    return newStr
}
// console.log("Ex - 18: " + numberToString(30))
// ================================================================================

// 19) Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
const acronym = function(str){
    let words = str.split(' ')
    let acronym = ''
    for(let i=0; i<words.length; i++){
        acronym += words[i].charAt(0).toUpperCase()
    }
    return acronym
}
// console.log("Ex - 19: " + acronym('british broadcast corporation'))
// ================================================================================