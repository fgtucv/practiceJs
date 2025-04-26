// console.dir(Date); //це клас в якому лежать всі методи для роботи з датою та часом

// Виклик екзимпляру класу Date покаже поточний час 
// const date = new Date(); 

// console.log(date);

//також для отриманя поточної дати та часу хорошим способом є метод Date.now()



// в результаті ми отримаємо кількість мілісикунд які пройшли від Unix time
//  console.log(curentDate);

// const timeSecond = document.querySelector(".second");
// const timeMinutes = document.querySelector(".minutes");
// const timeHours = document.querySelector(".hours");
// const button = document.querySelector(".button");

// button.addEventListener("click", startTimer);

// let timerInterval = null;

// function startTimer() {
//     if (timerInterval) {

//         return;
//     }

//     const startTime = new Date();

//     timerInterval = setInterval(() => {
//         const currentTime = new Date();
//         const elapsedTime = currentTime - startTime;

//         const seconds = Math.floor(elapsedTime / 1000) % 60;
//         const minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
//         const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

//         timeSecond.textContent = String(seconds).padStart(2, "0");
//         timeMinutes.textContent = String(minutes).padStart(2, "0");
//         timeHours.textContent = String(hours).padStart(2, "0");
//     }, 1000);
// }


// розглянемо методи гетери

// const fixTime = new Date();

// console.log(fixTime.getFullYear());

// console.log(fixTime.getHours());

// console.log(fixTime.getMinutes());
// 
// console.log(fixTime.getSeconds());

// розглянемо методи сетери

// const secondDate = new Date();

// secondDate.setHours(16, 8, 43, 500);

// console.log(secondDate.setHours(16, 8, 43, 500));

// console.log(secondDate.setFullYear(2020, 4, 5));

// Метод Date.parse() може певести вказану дату у мілісекунди наприклад

// const miliseconds1 = Date.parse("2025-01-05T15:47:32");

// const miliseconds2 = Date.parse("2025-01-01T00:00:00");

// const difference = miliseconds1 - miliseconds2;

// const days = Math.round(difference / 1000 / 60 / 60 / 24);

// console.log(days);

// console.log(miliseconds1);

//  метод toLocaleString() дозволяє нам отримати дату в форматі рядка наприклад

// const date = new Date(746385366584)

// const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
// };

// console.log(date.toLocaleString("UK-UK", options));

// 1. Створити функцію, яка повертає поточну дату та час.
// 2. Створити функцію, яка приймає дату та повертає рік.
// 3. Створити функцію, яка приймає дату та повертає місяць.
// 4. Створити функцію, яка приймає дату та повертає день місяця.
// 5. Створити функцію, яка приймає дату та повертає години.
// 6. Створити функцію, яка приймає дату та повертає хвилини.
// 7. Створити функцію, яка приймає дату та повертає секунди.
// 8. Створити функцію, яка перевіряє чи є дата вихідним днем (субота або неділя).
// 9. Створити функцію, яка порівнює дві дати та повертає різницю в днях.
// 10. Створити функцію, яка приймає дату та кількість днів, та повертає нову дату після додавання цієї кількості днів.

// 1.

// function realDateAndTime() {
//         const now = new Date();
//         const year = now.getFullYear();
//         const month = now.getMonth() + 1;
//         const day = now.getDate();
//         const hours = now.getHours();
//         const minutes = now.getMinutes();
//         const seconds = now.getSeconds();

//         return `${year}.${month}.${day} ${hours}:${minutes}:${seconds}`;
// }

// console.log(realDateAndTime());

// 2.

// function getYear(date) {
//         return date.getFullYear();
// }

// console.log(getYear(new Date()));

// 3.

// function getMonth(date){
//     return date.getMonth() + 1;
// }

// console.log(getMonth(new Date()));

// 4.

// function getDay(date){
//     return date.getDate();
// }

// console.log(getDay(new Date()));

// 5.

// function getHours(date) {
//         return date.getHours();
// }

// console.log(getHours(new Date()));

// 6.

// function getMinutes(date) {
//         return date.getMinutes();
// }

// console.log(getMinutes(new Date()));

// 7.

// function getSecond(date) {
//         return date.getSeconds();
// }

// console.log(getSecond(new Date()));

// 8.

// function findDay(date) {
    
//         const dayOfWeek = date.getDay();

    
//         return dayOfWeek === 0 || dayOfWeek === 6;
//     }
    
//     console.log(findDay(new Date("2025-01-22")));
    

// 9.

// const oldDate = new Date("June 1, 2018 23:45:00");
// const newDate = new Date();

// function getDifference(oldDate, newDate) {
//         const newTime = newDate.getTime();
//         const oldTime = oldDate.getTime();

//         const difference = (newTime - oldTime) / 1000 / 60 / 60 / 24;

//         return Math.round(difference);
// }

// console.log(getDifference(new Date("June 1, 2018 23:45:00"), new Date()));

// 10

// function getDay(date, days) {

//         const milliseconds = days * 24 * 60 * 60 * 1000;
    
//         const dateToMilliseconds = date.getTime();
    
//         const milisecondsToDate = dateToMilliseconds + milliseconds;
    
//         return new Date(milisecondsToDate);
//     }
    
//     console.log(getDay(new Date("June 1, 2018 23:45:00"), 10));