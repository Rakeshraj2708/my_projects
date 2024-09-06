const passWordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDERFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{<>[]\/-=";
const alChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    

    while(length > password.length){
        password += alChars[Math.floor(Math.random() * alChars.length)];
    }
    passWordBox.value = password
}

function copyPassword(){
    passWordBox.select();
    document.execCommand("copy");
}
