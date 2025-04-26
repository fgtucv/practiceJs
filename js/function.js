// function totalSum(num1, num2, num3){
// const sum = num1 + num2 + num3
// return sum
// }

// const resalt = totalSum(2, 4, 3);

// console.log(resalt);

// * Працюємо з колекцією карточок в trello
//  * - Метод splice() - міняє масив
//  * - Видалити
//  * - Додати
//  * - Оновити
//  */

// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
//   ];

// function cardDelet(deletCart){
//     const index = cards.indexOf(deletCart);

//     cards.splice(index, 1);

//     return cards
// }

// cardDelet('Карточка-4');

// console.log(cards);

// function addCards(addCard){

//     cards.splice(cards.length, 0, addCard);

//     console.log(cards);

//     return cards
// }

// addCards('Карточка-6');

// console.log(cards);

// function updetesCards(updetesCard1, updetesCard2){

//     const index2 = cards.indexOf(updetesCard2)

//     cards.splice(index2, 1, updetesCard1)

//     return cards
// }

// updetesCards('Карточка-8', 'Карточка-5');

// console.log(cards);

// let addnum = 0;

// function addnumbers(num1, num2 = 0, num3 = 0){

//     addnum = num1 + num2 + num3;

//     return addnum;
// }

// console.log(addnumbers(3, 7 ,5));

// console.log(addnumbers(3, 10, 6));

// console.log(addnumbers(3, 7));

// console.log(addnumbers(3));

// function addnumbers(){

// arguments - це [3, 7, 5, 3 ,5, 1, 3, 7, 8]

// const numbers = Array.from(arguments);

// for (const num of numbers) {
//     addnum += num
// }

// addnum = num1 + num2 + num3;

//     return addnum;
// }

// console.log(addnumbers(3, 7, 5));

// function addnumbers(...numbers){

//     for (const num of numbers) {
//         addnum += num
//     }

//     return addnum;
// }

// console.log(addnumbers(3, 7, 5));

// Напиши функцію calculateTotalPrice(items), яка приймає масив цін (чисел) та вертає їх суму

// let totalPrice = 0;

// const prices = [75, 57, 34, 93, 50, 48];

// function calculateTotalPrice(items){

//     for (const item of items) {
//         totalPrice += item
//     }

//     return totalPrice;
// }

// console.log(calculateTotalPrice(prices));

// Напиши функцію logItems(items) для перебору та логування масиву

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавіатура', 'навушники', 'годинник']);

// function logItems(items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }

// logItems(["Mango", "Kiwi", "Poly", "Ajax"]);

// logItems([1, 2, 3, 4, 5]);

// logItems(["клавіатура", "навушники", "годинник"]);


// Напиши функцію findSmallesNumber(numbers) для пошуку найменшого числа в масиві,
//  * при умові що числа унікальні (не повторюються).

// const numbersArrey = [2, 7, 3, 9, 5, 0, 6];

// let smalesNumber = numbersArrey[0];

// function findSmallesNumber(numbers) {

//     for (let i = 0; i < numbers.length; i++) {

//         if (numbers[i] < smalesNumber) {
//             smalesNumber = numbers[i];
//         }
//     }

//     return smalesNumber;
// }

// console.log(findSmallesNumber(numbersArrey));

// Напиши функцію findLogin(allLogins, login) для пошуку логіну
//   - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдений.'
//   - Якщо знайшли логін, вивести повідомлення 'Користувач [логін]  знайдений.'

// function findLogin(allLogins, findLogin) {

//     for (const login of allLogins) {

//         if (findLogin === login) {

//             console.log('Користувач ' + login + 'знайдени.')
//         } else {

//             console.log('Користувач ' + login + 'не знайдений.')
//         }
//     }
// } 

// findLogin(["Mango", "Kiwi", "Poly", "Ajax"], "Ajax");

/* <умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна></вираз_якщо_умова_хибна> */

// const logins = ["Mango", "Kiwi", "Poly", "Ajax"];

// logins.includes("Ajax")  ? console.log('Користувач знайдени.') : console.log('Користувач не знайдений.');

// Напиши функцію changeCase(string) яка заміняє регістр кожного символу в рядку на звортоній.
//  Наприклад, якщо рядок «JavaScript», то в підсумку має вийти рядок «jAVAsCRIPT».

// function changeCase(strings){
//     let leters = strings.split("");

//     for (const leter of leters) {
//         if (leter === leter.toLowerCase()){

//         }
//     }
// }

