// const freinds = ["Ivan", "Kolya", "Arthur"];

// console.table(freinds);

// console.log(freinds[1]);

// console.log(freinds.length - 1);

// Пербір (ітерація по масиву) 
// 1) цикл for використовуємо якщо потрібен індекс або потрібно змінити елемент масиву  
// 2) цикил for ... of використовеємо для масивів якщо індекс не потрібен і якщо в масиві нічого міняти не портібно

// for (let i = 0; i <= freinds.length - 1; i++) {
// console.log(freinds[i])
// }

// for (const freind  of freinds) {
//     console.log(freind)
// }

// порахувати загальну суму покупок у корзині 

// const cart = [467, 209, 587, 912, 423];

// let sum = 0;

// for (let i = 0; i < cart.length; i++){
//     sum += cart[i]
// }

// for (const price of cart) {


//     const totalPrice = price + (price * 10 / 100)

//     sum += Math.round(totalPrice)
// }

// console.log(sum);


// Напиши скрипт який підрахує суму всіх парних чисел в масиві

// const numbers = [12, 11, 10, 6, 5, 8, 9, 13];

// let sum2 = 0;

// for (const number of numbers) {
//     if (number % 2 !== 0){
//         continue
//     }

//     sum2 += number
// }

// console.log(sum2);

//  * Напиши скрипт пошуку логіну
//  * - Якщо логика ні, вивести повідомлення 'Користува [логін] не знайдений.'
//  * - Якщо знайшли логін, вивести повідомлення 'Користува [логін] знайдений.'
//  *
//  * - Спочатку через for
//  * - Потім через for...of
//  * - Логіка break
//  * - Метод includes() з тернарним оператором

// const logins = ["Fgtucv", "Mango", "2", "dfghj", "Login"];

// const userLogin = prompt("Введіть логін користувача");

// for (const login of logins) {
//     if (userLogin === login){
//         alert(`Користува ${userLogin} знайдений.`)

//         break
//     } else{
//         alert(`Користува ${userLogin} не знайдений.`)

//         break
//     }
// }

// Напиши скрипт пошуку найменшого числа в масиві,
//  при умові що числа є унікальними (не повторяються)

const numbers = [4, 7, 3, 9, 1, 5, 8, 6, 0];

let smallestNumber = numbers[0];

for (const number of numbers) {
    if (number < smallestNumber){
        smallestNumber = number
    }
}

console.log(`най менше число ${smallestNumber}`)