// 1)
// Create a function to calculate the sum of the two given integers. If the two values are the same, then returns the triple of their sum.
const sum = function(n1,n2){
    if(n1 === n2){
        return (n1 + n2) * 3
    } else {
        return (n1 + n2) 
    }
}
// console.log("Ex - 1: " + sum(2, 2))

// 2)
// Create a function to check two given numbers. Return true if one of the numbers is 50, or if their sum is 50.

const checkTwoNumbers = function(n1, n2){
    return (n1===50 ? true : n2===50 ? true : n1+n2===50 ? true : false)
}
console.log("Ex - 2: " + checkTwoNumbers(25, 2))