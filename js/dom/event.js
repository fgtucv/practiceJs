// const button = document.querySelector(".test-btn");
// const body = document.querySelector("body");

// button.textContent = "Button";

// button.addEventListener("click", changeBackground);

// function changeBackground(event) {
//     let r = Math.random() * (255 - 1) + 1;
//     r = Math.round(r);

//     let g = Math.random() * (255 - 1) + 1;
//     g = Math.round(g);

//     let b = Math.random() * (255 - 1) + 1;
//     b = Math.round(b);

//     body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
// };

// _____________________________________________________________

// Створіть форму з двома текстовими полями 
// та кнопкою "Додати", яка додає новий елемент li в ul, 
// що містить текст, який введено в першому полі.

// Напишіть інтерфейс для створення списку на основі того, 
// що введе користувач. Створіть інпут та кнопку “додати”. 
// Для кожного пункта списку:
// Запитайте текст пункту у користувача 
// за допомогою input.
// Створіть <li> з цим текстом та додайте його до <ul>.
// Кожен раз як користувач натискає кнопку 
// “додати” з’являється новий пункт списку.
// Всі елементи повинні створюватися динамічно.
// Якщо користувач вводить HTML-теги, вони 
// мають розглядатися як текст.
// Якщо користувач нічого веннів і натиснув 
// кнопку вивести повідомлення “Введіть текст”

// const button = document.querySelector(".button");
// const input = document.querySelector(".input");
// const list = document.querySelector(".list");

// console.log(input)

// button.addEventListener("click", addItem);

// function getData(){


//     let inputInfo;

//     input.addEventListener("change", (event) => {
//         inputInfo = event.target.value;

//         console.log(event.target)

//         console.log(inputInfo)

        
//     });

// return inputInfo;

//     // console.log(inputInfo)
// };

// function addItem() {
//     const inputText = getData();

//     console.log(inputText)
// };