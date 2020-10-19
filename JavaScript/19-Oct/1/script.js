document.getElementById("button").disabled = true;
$("label").hide();
function submit() {
    $("label").hide();
    var phone = document.getElementById('phone').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    var nameRGEX = /^[A-Z][a-z]*\s[A-Z][a-z]*/;
    var nameRGEX_Al = /Al/;
    var nameRGEX_Als = /Al-/;
    if (nameRGEX.test(name)){
    if(nameRGEX_Al.test(name)){
        if(nameRGEX_Als.test(name)){
            nameResult=true;
        }
        else{
            nameResult=false;
        }
    }
    else{
        nameResult=true;
    }
    }
    else{
        nameResult=false;
    }
    
    var phoneRGEX = /^\d{3}-\d{3}-\d{4}$/;
    var phoneResult = phoneRGEX.test(phone);
    
    var emailRGEX = /\S+@\S+\.\S+/;
    var emailResult = emailRGEX.test(email);
    
    
    var passwordRGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
    var passwordResult = passwordRGEX.test(password);

if (!passwordResult) {
    $("#pPassword").show();
}
if (!emailResult) {
    $("#pEmail").show();
}
if (!phoneResult) {
    $("#pPhone").show();
}
if (!nameResult) {
    $("#pName").show();
}

//     console.log(phone);
// console.log(name);
// console.log(email);
// console.log(password);
    // alert(`Submit result: nameResult=${nameResult}, phoneResult=${phoneResult}, emailResult=${emailResult}, passwordResult=${passwordResult}`);
    
}
function checkbox() {
var button= document.getElementById("button");
var checkBox = document.getElementById("agree");
if (checkBox.checked) {
    button.disabled=false;
}
else{
    button.disabled=true;
}
}


