// Write a function that takes an array of numbers and a function as parameters. 
// The function paremeter should do something to a numbers (increment, double, decrement, etc) 
// and return the result. Your function should return the array that results from applying the 
// function parameter to each element in the number array.

// Ex:
// Input: [1,2,3]  function(num){return num * 2}
// Output: [2,4,6]

// Input: [1,2,3]  function(num){return num + 1}
// Output: [2,3,4]

// Input: [1,2,3] function(num) {return num /2}
// Output: [.5, 1. 1.5]

// Input: [1,2,3] function(num) {return num - 2}
// Output: [-1, 0, 1]

// building math
// review video for interviewer questions
const forEach = function(collection, callback){
    if(Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for(let key in collection){
            callback(collection[key], key, collection);
        }
    }
};


const map = function(collection, callback){
    const mapped = [];
    forEach(collection, function(value, index, collection){
        mapped.push(callback(value, index, collection));
    });
    return mapped;
};

// in terminal
//   forEach(status, console.log)


// const forEach = function(array, callback) {
//     for(let i =0; i < array.length, i++) {
//         callback(array[i]) i, array);
//     }
// }