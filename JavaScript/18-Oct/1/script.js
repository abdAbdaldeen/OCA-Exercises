//---------------------- 1
for (let row = 1; row <= 5; row++) {
    let rowS="";
    for (let colom = 1; colom <= row; colom++) {
        rowS+="*";
    }
    console.log(rowS);
    
}
console.log('---------------------- 2');
//---------------------- *
for (let row = 0; row < 5; row++) {
    let rowS="";
    for (let colom = 1; colom <= 5; colom++) {
        if (0<colom - row) {
            rowS+="*";
        }
        else{
            rowS+=" ";
        }
        
    }
    console.log(rowS);
    
}


console.log('---------------------- 3');
//---------------------- 3
for (let row = 1; row <= 3; row++) {
    let rowS="",x=0;
 for (let i = 0; i <= 3-row; i++) {
    rowS+=" ";
 }
 while (x != (row*2)-1) {
    rowS+="*";
    x++;
 }
    console.log(rowS);
    
}