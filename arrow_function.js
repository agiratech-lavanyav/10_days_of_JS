'use strict';



/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
// function modifyArray(nums) {
//     let numbers = (n)=>{
//         if (n % 2 == 0){
//             return n * 2;
//         } else {
//             return n * 3;
//         }
//     }  
//     var newArray = nums.map(numbers);
//     return newArray;  
// }
function modifyArray(nums){
    let arr = [];
    let numbers = (n) => {
            if (n%2 == 0){
                return n * 2;
            } else {
                return n * 3;
            }
            
        }
    for(let i = 0; i < nums.length; i++){
        arr.push(numbers(nums[i]));
    }
    return arr;  
}


function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}