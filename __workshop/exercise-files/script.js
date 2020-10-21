const form = document.querySelector("form");
const submitButton = document.getElementById("submitButton");
const checkBox = document.getElementById("checkbox");
const error = document.getElementById("error");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function(ev){

    ev.preventDefault();
    clearErrors();

    if(password.value.length <10){
        error.innerText = "Your password is too short! Please provide a password that is at least 10 characters long.";
        error.style.display = "block";
        password.style.border = "2px solid red";
        password.focus();
        return;
    }

    if(confirmPassword.value!=password.value){
        error.innerText = "Your passwords didn't match! Please provide the same password in each field.";
        error.style.display = "block";
        confirmPassword.style.border = "2px solid red";
        confirmPassconfirmPassword.focus();
        return;
    }

    if(!checkBox.checked){
        window.alert("You must agree to the terms of service before continuing.");
        return;
    }

    if(checkBox.checked && password.value.length >=10 && 
        confirmPassword.value == password.value){
            window.alert("Success!");
        }
})
function clearErrors(){
    error.style.display = "none";
    password.style.border = "1px solid lightgray";
    password.blur();
    confirmPassword.style.border = "1px solid lightgray";
    confirmPassword.blur();
};

