// Робимо slug в URL з назви статті (наприклад на dev.to)
//  * Заголовок статті складається лише з букв та пробілів
//  *
//  * - Нормалізуємо рядок
//  * - Разбиваємо по словах
//  * - Зшиваємо в рядок з разділювачами
//  */

// const title = 'Top 10 benefits of React framework';

// Має вийти top-10-benefits-of-react-framework

const title = 'Top 10 benefits of React framework';

const normalizeTitle = title.toLocaleLowerCase();

const splitTitel = normalizeTitle.split(" ");

const joinTitel = splitTitel.join("-")

console.log(joinTitel);

//  * Напиши скрипт пошуку логіну
//  * - Якщо логика ні, вивести повідомлення 'Користува [логін] не знайдений.'
//  * - Якщо знайшли логін, вивести повідомлення 'Користува [логін] знайдений.'
//  *
//  * - Метод includes() з тернарним оператором

// const login = ['dnveqoi', 'djfoow', 'qwer', 'cvbn', 'dfgsdfg'];

// const loginScreac = prompt("Введіть логін");

// console.log(login.includes(loginScreac));

/* <умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна></вираз_якщо_умова_хибна> */

// const messeg = login.includes(loginScreac) ? alert(`Користува ${loginScreac} знайдений.`) : alert(`Користува ${loginScreac} не знайдений.`);

// const freindArray = ["Kolya", "Ivan"];

// const freindToFinght = prompt("Введіть імя друга");

// console.log(freindArray);

// const response = freindArray.includes(freindToFinght) ? alert("Друга знайдено") : freindArray.push(freindToFinght);

// console.log(freindArray);

// freindArray.pop();

// console.log(freindArray);

// freindArray.shift();

// console.log(freindArray);

// freindArray.unshift("Andriy");

// console.log(freindArray);

// console.log(freindArray.indexOf("Ivan"));

// const array1 = [1, 2, 3, 4, 5, 6, 7];

// const array2 = ['dvdvda', 'cwcweceq', 'vqervwr'];

// const newArray = [];

// for (let i = 0; i < array1.length; i++){

//     newArray.push(array1[i])

// }

// console.log(newArray);

// for (let i = 0; i < array2.length; i++){

//     newArray.push(array2[i])

// }

// console.log(newArray);

// другий спосіб

// const newArray = array1.concat(array2);

// console.log(newArray);

// Напиши скрипт, який обʼєднує всі елементи масиву в одне рядкове значення.
//  * Елементів може бути довільна кіл-ть.
//  * Нехай елементи масиву  в рядку будуть розділені комою.

// let array1 = ['dvdvda', 'cwcweceq', 'vqervwr'];

// let array2 = ['sdfg', 'cwcweceq', 'vqervwr'];

// array1 = array1.concat(array2);

// array1 = array1.join(",")

// console.log(array1);

// const array1 = ['dvdvda', 'cwcweceq', 'vqervwr'];

// let string = "";

// for (const str of array1) {
//     string += array1
// }

// console.log(string);

// Напиши скрипт який замінить регістр кожного символу в рядку на протилежний.
//  * Наприклад, якщо рядок «JavaScript», то в підсумку рядок має бути «jAVAsCRIPT».

// const text = prompt("Введіть рядок");

// const leters = text.split("");

// let newString = "";

// for (let i = 0; i < leters.length; i++){
    // if (leters[i] === leters[i].toLowerCase()){
    //     newString = newString + leters[i].toUpperCase() 
    // }else{
    //     newString = newString + leters[i].toLowerCase()
    // }

//     newString = leters[i] === leters[i].toLowerCase() ? newString + leters[i].toUpperCase() : newString + leters[i].toLowerCase()
// }

// console.log(newString);


/*
 * Працюємо з колекцією карточок в trello
 * - Метод splice() - міняє масив
 * - Видалити
 * - Додати
 * - Оновити
 */

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
  
  console.table(cards);

// Видаленя карточки

const deletCart = "Карточка-3";

const index = cards.indexOf(deletCart);

cards.splice(index, 1);

console.log(cards);

cards.splice(cards.length, 0, "Карточка-6");

console.log(cards);

const addCard = prompt("ВВедіть карточку")

cards.splice(1, 1, addCard);

console.log(cards);