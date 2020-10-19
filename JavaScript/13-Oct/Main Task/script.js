/* 
Write a program to calculate the marks of a student, the program should has the following:
- 6 variables for each subject (Math, English, Arabic, Bio, Computer, Religion)
- a constant of the subjects number
The program work flow should be as follow:
1. Ask student to enter his/her name
2. Ask student to enter the mark of each subject one by one (mark of 100).
3. the program will calculate the sum of all subjects marks
4. the program will calculate the average mark of the subjects
5. the program will print out the result average as follow:
a. 50 to 60 will print (Pass)
b. 60 to 70 will print (average)
c. 70 to 80 will print (good)
d. 80 to 90 will print (very good)
e. 90 to 100 will print (Excellent)
*/
var subjects = ["Math", "English", "Arabic", "Bio", "Computer", "Religion"];
const subjectsNumber = subjects.length;

var name = prompt("Please enter your name:");

var subjectsMap = new Map();
let sum = 0;
for (let i = 0; i < subjectsNumber; i++) {
  let mark = prompt("Please enter your mark of 100 for " + subjects[i] + ":");
  subjectsMap.set(subjects[i], parseInt("mark"));
  sum += parseInt(mark);
//   console.log(sum);
}
// console.log(sum);
// console.log(typeof(sum));

var avg = sum / subjectsNumber;
 avg= Math.round(avg);
let x;
// console.log(avg);
for (let i = 50 ; i < 100; i += 10) {
    // console.log(i);
  if (avg >= i && avg < i + 10) {
      x = i;
    break;
    }
}
switch (x) {
  case 90:
      alert("Excellent");
    break;
  case 80:
    alert("very good");
    break;
  case 70:
    alert("good");
    break;
  case 60:
    alert("average");
    break;
  case 50:
    alert("Pass");
    break;

  default:
    alert("fell 🙂");
    break;
}
/* 
بدي استعمل 
map و switch
خاوة 😂😂
*/

// --------------------------
// document.write('<table>');
// for (let i = 0; i < 2; i++) {
//     document.write('<tr>');
//     for (let i = 0; i < subjectsNumber; i++){
//         document.write('<th>'+subjects[i]+'</th>');
//     }
//     document.write('</tr>');
//     document.write('<tr>');
//     for (let i = 0; i < subjectsNumber; i++){
//         document.write('<td>'+subjectsMap.get(subjects[i])+'</td>');
//     }
    
//     document.write('</tr>');
// }
// document.write('</table>');
