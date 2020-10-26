var isDisappear = false;
function animation() {
    var rs = document.getElementById("rightS");  
    var ls = document.getElementById("leftS");   
    if(!isDisappear){
        isDisappear=true;
    let op = 1;
    let id = setInterval(frame, 5);
    function frame() {
      if (op == 0) {
        clearInterval(id);
      } else {
        op-=0.005;
        rs.style.opacity = op ; 
        ls.style.opacity = op ; 
      }
    }
}
// else{
//     isDisappear = false;
//     let op = 0;
//     let id = setInterval(frame2, 5);
//     function frame2() {
//       if (op == 1) {
//         clearInterval(id);
//       } else {
//         op+=0.1;
//         rs.style.opacity = op ; 
//         ls.style.opacity = op ; 
//       }
//     }
// }
  }