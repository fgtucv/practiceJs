// метод window.setTimeout(callbeak, delay, additionalArguments);

// console.log(window);

// setInterval(() => {
//     alert("Це перший колбек")
// }, 5000)

// setInterval(() => {
//     alert("Це другий колбек")
// }, 3000)

// alert("олжитол");

// alert("xfghjk");

// setTimeout(() => {
//     alert("Це третій колбек")
// }, 1000)

// const showMesseg = () => {
//     console.log("messeg")
// }

// const timer = setInterval(showMesseg, 1000);

// const randomSeconds = Math.random() * (15000 - 5000) + 5000;

// console.log(randomSeconds);

// if(randomSeconds > 7000){
//     clearInterval(timer)
// }



// Завдання "Лічильник": Створіть лічильник, 
// який збільшується на одиницю кожну секунду. 
// Виводьте значення лічильника на сторінці.

// const counter = document.querySelector(".counter");
// let score = 0;

// setInterval(() => {
//     counter.textContent = score;

//     score = score + 1;
// }, 1000);


// Завдання "Зміна кольору": Створіть блок, 
// який змінює свій фоновий колір кожні 3 секунди. 
// Використовуйте setInterval для зміни кольору.

// const block = document.querySelector(".block");

// setInterval(() => {
//     const r = Math.random() * (255 - 0) + 0;
//     const g = Math.random() * (255 - 0) + 0;
//     const b = Math.random() * (255 - 0) + 0;

//     block.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// }, 3000)

// Завдання "Зміна стилів": Створіть блок, який змінює свої стилі 
// (наприклад, фоновий колір, розмір шрифту) через певний час.

// const block = document.querySelector(".block");

// setInterval(() => {
//     const r = Math.random() * (255 - 0) + 0;
//     const g = Math.random() * (255 - 0) + 0;
//     const b = Math.random() * (255 - 0) + 0;

//     const width = Math.random() * (700 - 1) + 1;
//     const height = Math.random() * (700 - 1) + 1;

//     const borderRadius = Math.random() * (100 - 1) + 1;

//     block.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
//     block.style.width = width + "px";
//     block.style.height = height + "px";
//     block.style.borderRadius = borderRadius + "px";
// }, 3000)

// Завдання "Переключення слайдів": Створіть галерею слайдів, 
// яка автоматично перемикається на наступний слайд через 
// певний інтервал, використовуючи setTimeout.

// const sliders = document.querySelector(".sliders")
// const slide1 = document.getElementById("1");
// const slide2 = document.getElementById("2");
// const slide3 = document.getElementById("3");

// console.log(slide1);
// console.log(slide2);
// console.log(slide3);

// setInterval(() => {
//     if(slide1.style.display === "block"){
//         slide1.style.display = "none";
//         slide2.style.display = "block";
//     } else if (slide2.style.display === "block") {
//         slide2.style.display = "none";
//         slide3.style.display = "block";
//     } else if (slide3.style.display === "block") {
//         slide3.style.display = "none";
//         slide1.style.display = "block";
//     }
// }, 3000)

// const timerSpan = document.querySelector(".timer");
// const startButton = document.querySelector(".start-timer");
// const stopButton = document.querySelector(".stop-timer");

// let second = 0;
// let interval;

// startButton.addEventListener("click", () => {
//     interval = setInterval(() => {
//         second += 1;

//         timerSpan.textContent = second;
//     }, 1000);
// });

// stopButton.addEventListener("click", () => {
//     clearInterval(interval);
// });


// const startButton = document.querySelector(".start-timer");
// const timerSpan = document.querySelector(".timer");


// let second = 10;

// startButton.addEventListener("click", () => {
//     setInterval(() => {
//         if(second <= 0 ){
//             timerSpan.textContent = "Час вийшов";
//         } else{
//             second -= 1;

//             timerSpan.textContent = second;
//         }
//     }, 1000);
// });


// Створити таймер, який буде починати 
// відлік з 10 секунд та зменшувати 
// час кожну мілісекунду. При досягненні 5 секунд, таймер повинен 
// змінювати колір фону сторінки на червоний.

// const startButton = document.querySelector(".start-timer");
// const timerSpan = document.querySelector(".timer");


// let second = 10;
// let interval;

// startButton.addEventListener("click", () => {
//     interval = setInterval(() => {

//         if (second <= 5) {
//             document.body.style.backgroundColor = "red";
//         }
//             second -= 0.001;

//             if (second <= 0){
//                 clearInterval(interval);
//             }

//             timerSpan.textContent = second.toFixed(3);
//     }, 1)
// })

// Реалізуйте годинник, який показує поточний час у форматі "години:хвилини:секунди". 
// Оновлюйте годинник кожну секунду без використання вбудованих функцій для отримання поточного часу.

const timeSpan = document.querySelector(".time");

let second = 50;
let minetes = 32;
let hours = 20;

setInterval(() => {
    if(second >= 60){
        second = 0;
        minetes += 1;
    } else if(minetes >= 60){
        minetes = 0;
        hours += 1;
    }else if(hours >= 24){
        hours = 0;
        minetes = 0;
        second = 0;
    }

    const seconds = second.toString().length < 2 ? second.toString().padStart(1, "0") : second;


    timeSpan.textContent = `${hours}:${minetes}:${seconds}`;

    second += 1;

    timeSpan.textContent = `${hours}:${minetes}:${seconds}`;
}, 1000);