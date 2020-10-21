// Web Storage Exercise:
// Create a form of 2 inputs, a key input and value input
// Create three buttons: "clear", "Local Submit" and "Session Submit"
// User will enter the name key "Full Name" at the key input
// User will enter the name value "Hassan Matar" at the value input
// When user click the local submit button, the entered data will be saved on the local storage
// When user click the session submit button, the entered data will be saved in the session storage
// When user click the clear button, the saved data will be cleared
// HELPING NOTE:
// To validate your work, make the entered data displayed on HTML page besides being stored
// If you refresh the page and the data stays, this means it's saved successfully
// Use google chrome dev tool to validate its saved when saved, and to checked its deleted when its cleared
function getallLocal() {
    var obj = Object.keys(localStorage).reduce(function(obj, key) {
        obj[key] = localStorage.getItem(key);
        return obj
     }, {});
     return obj;
}
function getallSession() {
    var obj = Object.keys(sessionStorage).reduce(function(obj, key) {
        obj[key] = sessionStorage.getItem(key);
        return obj
     }, {});
     return obj;
}
let allLocal = getallLocal();
for (x in allLocal) {
    $("#localTable tbody").html(function(i,old) {
        return old + `<tr><td>${x}</td><td>${allLocal[x]}</td></tr>`;
    })
}

let allSession = getallSession();
for (x in allSession) {
    $("#sessionTable tbody").html(function(i,old) {
        return old + `<tr><td>${x}</td><td>${allSession[x]}</td></tr>`;
    })
}

function clearr() {
    var txt;
    var r = confirm("Are you sure?");
    if (r == true) {
        localStorage.clear();
        sessionStorage.clear();
    }
    $("#localTable tbody").html("");
    $("#sessionTable tbody").html("");
    
}
function localSubmit() {
    let ukey = $("#key").val();
    let uvalue = $("#value").val();
    localStorage.setItem(ukey, uvalue);

}
function sessionSubmit() {
    let ukey = $("#key").val();
    let uvalue = $("#value").val();
    sessionStorage.setItem(ukey, uvalue);
}