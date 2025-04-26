// const articleElemen = document.createElement("article");


// const imageElement = document.createElement("img");

// imageElement.alt = "image";

// imageElement.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png";

// imageElement.setAttribute("width", "320")


// const titleElement = document.createElement("h1");

// titleElement.textContent = "Lorem";


// const textElement = document.createElement("p");

// textElement.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In necessitatibus excepturi culpa natus enim, ex nesciunt nobis itaque error explicabo incidunt saepe minima illum numquam quisquam quam corrupti dolorum harum";


// articleElemen.append(imageElement, titleElement, textElement);

// document.body.append(articleElemen);


// const title2Element = document.createElement("h2")

// title2Element.textContent = "Lorem";

// document.body.prepend(title2Element);


// const buttonElement = document.createElement("button");

// buttonElement.textContent = "Button";

// articleElemen.before(buttonElement);


// title2Element.innerHTML = "це заголовок номер 2";

// title2Element.innerHTML = "";

// console.log(title2Element.innerHTML);


// articleElemen.innerHTML = "";

// console.log(articleElemen.innerHTML);


// const articleMarkap = `<article>
// <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png" alt="image">
// <h1>Lorem</h1>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A excepturi sint itaque ab voluptatum quam
//     dignissimos, optio explicabo quo facilis recusandae eum velit harum repudiandae soluta doloremque
//     repellendus cupiditate laboriosam?</p>
// </article>`;

// document.body.innerHTML = articleMarkap;

// buttonElement.insertAdjacentHTML("beforebegin", articleMarkap)


// const linkElement = document.createElement("a");

// linkElement.href = "https://textbook.edu.goit.global/javascript-yk5evp/v2/uk/docs/lesson-01/intro/";

// linkElement.textContent = "link";

// console.log(linkElement);


// const linkElement = `<a href="https://textbook.edu.goit.global/javascript-yk5evp/v2/uk/docs/lesson-01/intro/">link</a>`;

// document.querySelector("article").insertAdjacentHTML("beforeend", linkElement)



// Створити та додати колекцію кнопок з динамічними даними з масиву об’єктів. використати метод createElement

// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'grey', color: '#607D8B' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
//   ];
//  <div class="color-picker js-color-picker"></div>

// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'grey', color: '#607D8B' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
// ];

// const button1 = document.createElement("button");

// const button2 = document.createElement("button");

// const button3 = document.createElement("button");

// const button4 = document.createElement("button");

// const button5 = document.createElement("button");

// const button6 = document.createElement("button");

// button1.textContent = "button";
// button1.style.backgroundColor = colorPickerOptions[0].label;
// button1.style.color = colorPickerOptions[0].color

// button2.textContent = "button";
// button2.style.backgroundColor = colorPickerOptions[1].label;
// button2.style.color = colorPickerOptions[1].color

// button3.textContent = "button";
// button3.style.backgroundColor = colorPickerOptions[2].label;
// button3.style.color = colorPickerOptions[2].color

// button4.textContent = "button";
// button4.style.backgroundColor = colorPickerOptions[3].label;
// button4.style.color = colorPickerOptions[3].color

// button5.textContent = "button";
// button5.style.backgroundColor = colorPickerOptions[4].label;
// button5.style.color = colorPickerOptions[4].color

// button6.textContent = "button";
// button6.style.backgroundColor = colorPickerOptions[5].label;
// button6.style.color = colorPickerOptions[5].color

// const item1 = document.createElement("li");

// const item2 = document.createElement("li");

// const item3 = document.createElement("li");

// const item4 = document.createElement("li");

// const item5 = document.createElement("li");

// const item6 = document.createElement("li");

// item1.append(button1);

// item2.append(button2);

// item3.append(button3);

// item4.append(button4);

// item5.append(button5);

// item6.append(button6);

// const list = document.createElement("ul");

// list.append(item1, item2, item3, item4, item5, item6);

// document.body.append(list);

// Другий варіант 

// function makeButtonList(colorPickerOptions) {
// return colorPickerOptions.map((optioStyle) => {
//         const buttonElements = document.createElement("button")
//         buttonElements.textContent = "button";
//         buttonElements.style.backgroundColor = optioStyle.label;
//         buttonElements.style.color = optioStyle.color

//         return buttonElements;
//     });
// };

// const buttonList = makeButtonList(colorPickerOptions);

// console.log(buttonList);

// const boxContainer = document.querySelector(".js-color-picker");

// const buttonListtoAdd = buttonList.join("");

// boxContainer.innerHTML = buttonListtoAdd;

// boxContainer.append(...buttonList)