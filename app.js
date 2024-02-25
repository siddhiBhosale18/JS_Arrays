// 2. Write a JavaScript program to find the maximum number in an array.//reduse

// let array = [5, 8, 1, 66, 99, 12];

// const max = array.reduce((acc, current) => {
//     if (current > acc) {
//         acc = current;
//     }
//     return acc;
// }, array[0]);

// console.log(max);

// 5. Write a JavaScript function that takes an array of numbers and 
//  returns a new array with only the even numbers.

// let array = [1, 45, 7, 2, 9, 8, 26, 35, 40, 22, 14];

// let isEven = array.filter(val => val % 2 == 0);
// console.log(isEven);

// let isOdd = array.filter(val => val % 2 !== 0);
// console.log(isOdd);

// Write a JavaScript program to find the largest element in a nested array.
const nestedArray = [
    [1, 200, 13],
    [4, [5, 66]], 7, [8, 9, 10]
];

// function findLargestInNestedArray(arr, init) {
//     // console.log(arr)
//     arr.reduce((acc, curr) => {
//         // if (Array.isArray(curr)) {
//         //     findLargestInNestedArray(curr)
//         // } else {
//         console.log("--->", curr)
//         console.log("ACC --->", acc)
//             // }
//     })
// }

function flatArray(arr) {
    const temp = [];
    for (let i of arr) {
        if (Array.isArray(i)) {
            temp.push(...flatArray(i))
        } else {
            // console.log(i)
            temp.push(i);
        }
    }
    return temp;
}
const ans = flatArray(nestedArray)
console.log(ans);

let maxNum = ans.reduce((acc, curr) => {
    if (curr > acc) {
        acc = curr
    }
    return acc
}, 0)

console.log(maxNum)