// Створіть функцію, яка буде додавати об'єкт в localStorage. 
// Назва об'єкту має бути ключем, а сам об'єкт - значенням.

const object = {
    id: "72837029"
}

const friends = ["Ivan", "Kolya", "Arthur"];

// function addToLocalStorage(key, element) {
//     const dataStorage = JSON.stringify(element);

//     localStorage.setItem(key, dataStorage);
// }

const addToLocalStorage = (key, element) => localStorage.setItem(key, JSON.stringify(element));

addToLocalStorage("userId", object);

addToLocalStorage("friendsData", friends);

// Створіть функцію, яка буде отримувати об'єкт з localStorage. 
// Назва об'єкту має бути ключем, а сам об'єкт - значенням.

// function extractFromLocalStorage(key) {
//     const data = localStorage.getItem(key);

//     const element = JSON.parse(data);

//     return element;
// }

const extractFromLocalStorage = (data) => JSON.parse(localStorage.getItem(data));

console.log(extractFromLocalStorage("userId"));


// Створіть функцію, яка буде видаляти значення з localStorage за ключем.

// function deletFromLocalStorage (key) {
//     localStorage.removeItem(key);
// }

// deletFromLocalStorage("friendsData");

// Створіть функцію, яка буде видаляти всі значення з localStorage.

// function removeLocalStorage() {
//     localStorage.clear()
// }

// removeLocalStorage()


// Створіть функцію, яка буде повертати кількість елементів в localStorage

// function getQuantityElementFromLocalStorage() {
//     return localStorage.length;
// }

const getQuantityElementFromLocalStorage = () => localStorage.length

console.log(getQuantityElementFromLocalStorage())

const getKeyArrreyFromLocalStoreg = () => Object.keys(localStorage)

console.log(getKeyArrreyFromLocalStoreg());