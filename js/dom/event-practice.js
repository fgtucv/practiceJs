// const agreeInput = document.querySelector(".agree");

// agreeInput.addEventListener("change", changeCheckboxStyle)

// function changeCheckboxStyle(event) {
//     if(event.currentTarget.checked){
//         agreeInput.style.boxShadow = "3px 5px 4px teal";
//     }else{
//         agreeInput.style.boxShadow = "none";
//     }
// };

// const inputEmail = document.querySelector(".email");
// const inputPhone = document.querySelector(".phone");
// const emailText = document.querySelector(".text-email");
// const phoneText = document.querySelector(".text-phone");
// const submitButton = document.querySelector(".submit-button");
// const submitForm = document.querySelector(".form")


// inputEmail.addEventListener("change", showEmail);
// inputPhone.addEventListener("input", showPhone);


// function showEmail(){
// const text = inputEmail.value;

// emailText.textContent = text;
// };

// function showPhone(){
// const text = inputPhone.value;

// phoneText.textContent = text;
// };

// inputEmail.addEventListener("focus", focusEmail);
// inputPhone.addEventListener("focus", focusPhone);
// inputEmail.addEventListener("blur", blurEmail);
// inputPhone.addEventListener("blur", blurPhone);

// function  focusEmail() {
//         inputEmail.style.boxShadow = "3px 5px 4px 6px teal";
// };

// function  focusPhone() {
//         inputPhone.style.boxShadow = "3px 5px 4px 6px teal";
// };

// function  blurEmail() {
//     inputEmail.style.boxShadow = "none";
// };

// function  blurPhone() {
//     inputPhone.style.boxShadow = "none";
// };

// inputEmail.addEventListener("change",)

// function getInfoEmail(){

// };

// submitForm.addEventListener("submit", submitInfo);

// function submitInfo(event){
// event.preventDefault()

// const phone = inputPhone.value

// const email = inputEmail.value

// submitForm.reset()
// };

// document.addEventListener("keydown", consoleKey);

// function consoleKey(event){
// if(event.code === "KeyO"){
//     document.body.style.backgroundColor = "orange";
// } else if(event.code === "KeyF"){
//     document.body.style.backgroundColor = "green";
// } else if(event.code === "KeyC"){
//     document.body.style.backgroundColor = "red";
// }
// };

// ___________________________________________________

// 1 Написати скрипт в якому користувач 
// друкує на клавіатурі текст який 
// відображається на сторінці. При натисканні 
// на кнопку “Очистити” очищувати надрукований 
// текст. Використати можна наступну розмітку
// <button class="js-clear">Очистити</button>
//     <p class="output js-output"></p>
// 2 Змінити текст елементу з id="message" 
// на текст, який користувач вводить у 
// текстове поле з id="input" під час події keypress.
// <input type="text" id="input">
// <p id="message"></p>
/* 3 Вивести код клавіші, яку користувач натиснув, 
під час події keydown.
4 Змінити фон елементу з id="box" на жовтий, якщо 
користувач натискає клавішу y, та на зелений, 
якщо користувач натискає клавішу 
g, під час події keydown. */

const clearButton = document.querySelector(".js-clear");
let outputText = document.querySelector(".js-output");

clearButton.addEventListener("click", clearText);
document.addEventListener("keydown", writeText)

function clearText() {
    outputText.textContent = "";
};

function writeText(event) {
    outputText.textContent = outputText.textContent + event.key;
};