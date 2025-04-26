/*  <article>
        <h2></h2>
        <span></span>
        <p></p>
        <span></span>
        <span></span>
    </article> */

const products = [
  {
    neme: "Apple",
    price: 232,
    description: "Це опис продукту",
    isAvailable: true,
    quantity: 32,
  },
  {
    neme: "Orange",
    price: 324,
    description: "Це опис продукту",
    isAvailable: true,
    quantity: 42,
  },
  {
    neme: "Strowberry",
    price: 546,
    description: "Це опис продукту",
    isAvailable: false,
    quantity: 0,
  },
  {
    neme: "Kiwi",
    price: 232,
    description: "Це опис продукту",
    isAvailable: true,
    quantity: 32,
  },
  {
    neme: "Wathermelon",
    price: 324,
    description: "Це опис продукту",
    isAvailable: true,
    quantity: 42,
  },
  {
    neme: "Melon",
    price: 546,
    description: "Це опис продукту",
    isAvailable: false,
    quantity: 0,
  },
  {
    neme: "Apple",
    price: 232,
    description: "Це опис продукту",
    isAvailable: true,
    quantity: 32,
  },
  {
    neme: "Orange",
    price: 324,
    description: "Це опис продукту",
    isAvailable: true,
    quantity: 42,
  },
  {
    neme: "Strowberry",
    price: 546,
    description: "Це опис продукту",
    isAvailable: false,
    quantity: 0,
  },
  {
    neme: "Kiwi",
    price: 232,
    description: "Це опис продукту",
    isAvailable: true,
    quantity: 32,
  },
  {
    neme: "Wathermelon",
    price: 324,
    description: "Це опис продукту",
    isAvailable: true,
    quantity: 42,
  },
  {
    neme: "Melon",
    price: 546,
    description: "Це опис продукту",
    isAvailable: false,
    quantity: 0,
  },
];

const container = document.querySelector(".container");

// const productsList = products.map((product) => {
//     const articleElement = document.createElement("article");
//     const nameElement = document.createElement("h2");
//     nameElement.textContent = product.neme;
//     const priceElement = document.createElement("span");
//     priceElement.textContent = product.price;
//     const descriptionElement = document.createElement("p");
//     descriptionElement.textContent = product.description;
//     const availableElement = document.createElement("span");
//     availableElement.textContent = product.isAvailable;
//     const quantityElement = document.createElement("span");
//     quantityElement.textContent = product.quantity;
//     articleElement.append(nameElement, priceElement, descriptionElement, availableElement, quantityElement);
//     articleElement.style.width = "150px";
//     articleElement.style.border = "2px red solid";
//     articleElement.style.backgroundColor = "green";
//     return articleElement;
// });

// container.style.display = "flex";

// container.style.margin = "0 auto 0 auto";

// container.style.gap = "30px";

// container.style.alignItems = "center";

// container.style.justifContent = "center";

// container.style.flexWrap = "wrap";

// container.append(...productsList);

// ____________________________________________________________________________

// спосіб номер 2 через innerHTML і шаблоний рядок

// const productsList = products.map((product) => {
//     return `<article class="article">
// <h2 class="titel">${product.neme}</h2>
// <span class="price">${product.price}</span>
// <p class="description">${product.description}</p>
// <span class="isAvailable">${product.isAvailable}</span>
// <span class="quantity">${product.quantity}</span>
// </article>`;
// }).join("");

// console.log(productsList);

// container.insertAdjacentHTML("beforeend", productsList)

// ______________________________________________________________________________________

// Створіть блок з текстом та кнопкою "Розгорнути / Згорнути",
// яка змінює видимість блока при натисканні. Використовуйте insertAdjacentHTML.
// <div class="js-container">
// <h2>Заголовок</h2>
//   <p>Текст блоку</p>
// </div>

const div = document.querySelector(".js-container");

const rollUpBtn = document.querySelector(".roll-up");

const unFoldBtn = document.querySelector(".unfold");

rollUpBtn.addEventListener("click", rollUp);

function rollUp() {
    div.style.display = "none";
};

unFoldBtn.addEventListener("click", unFold);

function unFold() {
    div.style.display = "block";
};