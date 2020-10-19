/* 
Task #1:
Create an empty array
Use a loop to add the numbers from 1 to 10 to the array
Create two variables
Variable 1 to hold the sum of the odd numbers in the array
Variable 2 to hold the sum of the even numbers in the array
Create one function to make the summation process and use it to make the summation process
Print both variables at the end of the program
*/
let arr = new Array();
for (let i = 0; i < 10; i++) {
    arr[i]=i+1;
}
var odd=0,even=0;
function summation () {
    for (let i = 0; i < 10; i++) {
        if (arr[i]%2==0) {
            even += arr[i];
        }
        else{
            odd += arr[i];
        }
    }
}
summation();
console.log("sum of the odd numbers = "+ odd);
console.log("sum of the even numbers = "+ even);

