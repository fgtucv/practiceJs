// const promis = new Promise((resolve, reject) => {
//     const time = 1000;

//     setTimeout(() => {
//         if(time === 2000){
//             resolve("Проміс виконано успішно");
//         } else {
//             reject("Помилка в Промісі")
//         }
//     }, time)
// });

// promis.then((result) => {
//     console.log(result);
// }).catch((result) => {
//     console.log(result);
// });

// це промисіфікація функції

// function test() {
//     const promis = new Promise((resolve, reject) => {
//         const time = 1000;
    
//         setTimeout(() => {
//             if(time === 2000){
//                 resolve("Проміс виконано успішно");
//             } else {
//                 reject("Помилка в Промісі")
//             }
//         }, time)
//     });

//     return promis;
// }

// test().then((result) => {
//     console.log(result);
// }).catch((result) => {
//     console.log(result);
// });


// 1. Напишіть функцію, яка отримує масив чисел і повертає проміс,  який виконується, якщо всі числа в масиві є парними.Якщо ж принаймні одне число 
// непарне, проміс повинен бути відхилено з повідомленням "Є непарні числа".
// 2. Напишіть функцію, яка отримує масив об'єктів  і повертає проміс, який виконується з масивом імен, відсортованих за алфавітом.
// 3. Напишіть функцію, яка приймає два числа і повертає проміс, який виконується з результатом 
// їхнього додавання. Якщо хоча б одне з чисел не є числом, проміс повинен бути відхилено з повідомленням "Неправильні аргументи".

// 1. 

// function checkArray(array) {
//     const promies = new Promise((resolve, reject) => {
//         if(array.every(num => num % 2 === 0)){
//             resolve("Немає непарних чисел");
//         } else {
//             reject("Є непарні числа");
//         }
//     });

//     return promies;
// };

// console.log(checkArray([2, 4, 6, 8]));

// 2.

// const people = [
//     { name: "Anna"},
//     { name: "John"},
//     { name: "Maria"},
// ];

// function sortedName(objectsArray) {

//     const getArray = objectsArray.map(obj => obj.name);

//     const promies = new Promise((resolve, reject) => {

//         const sortedArray = getArray.sort((a, b) => a.localeCompare(b));

//         if(Array.isArray(objectsArray)){
//             resolve(`Масив відсортовано: ${sortedArray}`);
//         } else {
//             reject("Виникла помилка");
//         }
//     });

//     return promies;
// };

// console.log(sortedName(people));

// 3.

// function cheakNumber(num1, num2) {
//     const promies = new Promise((resolve, reject) => {
//         if(typeof num1 === "number" && typeof num2 === "number"){
//             resolve(`Тип даних павельний. Їхня сума дорівнює ${num1 + num2}`);
//         } else {
//             resolve("Тип даних є не павельним");
//         }
//     });

//     return promies;
// };

// console.log(cheakNumber(2, 3));