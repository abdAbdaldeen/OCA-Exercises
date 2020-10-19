/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/
function displayMaxNum(x,y) {
    if (x>y) {
      console.log(x);
    }
    else if (x<y) {
        console.log(y);
    }
    else{
        console.log(x +" = "+ y);
    }
}
// displayMaxNum(4,4);

// -------------or ------------
// just use Math.max 😁
console.log(Math.max(4,7));

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
  
function signOfProduct(x,y,z) {
    p=x*y*z;
    if (p>0) {
        alert("The sign is +")
    }
    else if (p<0) {
        alert("The sign is -")
    }
    else{
        alert("The result is zero")
    }
}

// signOfProduct(10,9,0);

//   -------------or ------------

// x=4,y=0,z=-1;
// p=x*y*z;
// alert(p>0 ? "The sign is +" :p<0 ?  "The sign is -" : "The result is zero");

 /******* End Your Code ********* */


/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

/******* Start Your Code *********/
function sort3num(a,b,c) {
    if (a<b){
        [a,b]=[b,a];
    }
    if (a<c){
        [a,c]=[c,a];
    }
    if (b<c) {
        [b,c]=[c,b];
    }
    alert(a +", "+ b+", "+c);
}  
// sort3num(0, -1, 4);



 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  function largest(arr) {
    let largestNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (largestNum < array[i])
        largestNum = array[i];
    }
    alert(largestNum);
  }
  array=[500, -2, 6, 0, 1];
//   largest(array);

//   -------------or ------------
// just use Math.max 🙄

// alert(Math.max(-5, -2, -6, 0, -1));

 /******* End Your Code ********* */




 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/

/******* Start Your Code *********/
function helloBye(x,y) {
    if (x>y) {
        console.log("Hello World")
        //you say 'display' not 'display an alert' 😁
    }
    else{
        alert("Goodbye");
    }
}
//   -------------or ------------

// x=6,y=40;
// alert(x>y ? "Hello World" : "Goodbye")

 /******* End Your Code ********* */



