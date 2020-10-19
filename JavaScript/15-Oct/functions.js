// Create a function called oddArray
// that accept an array
// and return an array have only the odd elemnts

// var nums= [1,2,3,8,9]
// Ex: oddArray(nums) => [1,3,9]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self


/******* Start Your Code *********/
function oddArray(arr) {
    let oddArr = new Array();
    let j=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2 != 0) {
            oddArr[j] = arr[i];
            j++;
        }
        
    }
    return oddArr;
}
// var nums= [1,2,3,8,9];
// console.log(oddArray(nums));

// ------------------------------------------------
function oddArray2(arr) {
    let oddArr = new Array();
    let j=0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i]%2 != 0) {
            oddArr[j] = arr[i];
            j++;
        }

        i++
    }
    return oddArr;
}



/******* End Your Code ********* */




// Create a function called aveArray
// that accept an array
// and return the average of the numbers inside this array

// var nums= [1,2,3,8,9]
// Ex: aveArray(nums) => 4.6

// var nums2= [1,2,3,8,9,77]
// Ex: aveArray(nums) => 16.6

// ** solve it one time using for loop and another using while loop
// **try more cases by your self


/******* Start Your Code *********/
function aveArray(arr) {
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avg =sum/arr.length;
    return avg.toFixed(1);
    
}
// nums= [1,2,3,8,9,77];
// console.log(aveArray(nums));


/******* End Your Code ********* */




// Create a function called factorial
// that takes a single parameter n,
// and return the product of all integers up to n starting from 1
// Ex: factorial(2); => 2 * 1 => 2
// Ex: factorial(4); => 4 * 3 * 2 * 1 => 24



/******* Start Your Code *********/
function factorial(n) {
    let fact=1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(10));

/******* End Your Code ********* */