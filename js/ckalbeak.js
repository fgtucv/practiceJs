// функція зворотнього виклику (колбек) - це функція яка пкредаєтся іншій функції як аргумент
// 1) функція вищого прядку це функція яка приймає іншу (колбек) функцію як параметер
// і може повертати колбек як результат своєї роботи

// const a = function (number, addnumber) {
// number * addnumber()
// const sum = addnumber(3, 4);

//     console.log(sum);

//     const result = sum * number;

//     return result;
// }

// const b = function (num1, num2) {
//     return num1 + num2;
// }

// console.log(a(4, b));

// console.log(a(4, function b (num1, num2) {return num1 + num2;})); це інлайн кулбек

// функція може приймати кілька колбеків:

// const a = function (number, addnumber, makemessege) {
// number * addnumber()
//     const sum = addnumber(3, 4);

//     console.log(sum);

//     const result = sum * number;

//     const showMessege = makemessege(result);

//     return showMessege;
// }

// const makeMessage = function (num3) {
//     return `Загальний результата обчисленя ${num3}`;
// }

// const b = function (num1, num2) {
//     return num1 + num2;
// }

// console.log(a(4, b, makeMessage));

// const f = function (num1, num2, callbeak) {
//     const resalt = num1 - num2;

//     const mase = callbeak(resalt);

//     return mase;
// }

// console.log(f(5, 2, makeMessage))

// function makePizza(makeName, makePizzaName, makeregistername, pricePzza) {
//   const name = makeregistername(makeName);

//   const price = pricePzza(makeName);

//   const pizzaName = makePizzaName;

//   const messege = `${name} ваша піца ${pizzaName} готова, до оплати ${price}`;

//   return messege;
// }

// function makeRegisterName(name) {
//   return name.toUpperCase();
// }

// function pricePzza(pizzaname) {
//   if (pizzaname === "Чотири сира") {
//     const price = 100;

//     return price;
//   } else {
//     const price = 80;

//     return price;
//   }
// }

// const result = makePizza("Олесь", "Чотири сира", makeRegisterName, pricePzza);

// console.log(result);


// function makeDish (name, dish){
//     return (`${name} готує ${dish}`);


// };

// console.log(makeDish("Манго", "Пиріжок"));

// console.log(makeDish("Полі", "Каву"));

// console.log(makeDish("полі", "Суп"));


// __________________________________________

// коли функція вертає іншу функцію це називаєтся замикання


// const makeChief = function (name) {

//     const makeDish = function (dish) {

//         return (`${name} готує ${dish}`);

//     }

//     return makeDish;
// };

// const mango = makeChief("Манго");

// console.log(mango);

// console.log(mango("Каву"));

// console.log(mango("Суп"));

// const poli = makeChief("Полі");

// console.log(poli)

// console.log(poli("Каву"));

// console.log(poli("Суп"));

// Округлятор

// const raunder = function (makeNumber, makePoints) {
// const number = makeNumber();

// const points = makePoints();

// const raunderNumber = number.toFixed(points);

// return raunderNumber;
// };

// function makeNumber (){

//     let num = prompt("Введіть число");

//     num = Number(num);

//     return num;
// };

// function makePoint (){

//     let point = prompt("До скількох округлити");

//     point = Number(point);

//     return point;
// };

// console.log(raunder(makeNumber, makePoint));

// console.log(raunder(makeNumber, makePoint));

// той самий приклад з замиканням

// const rounder = function (points){

// return function (number) {

//     return Number(number.toFixed(points))
// }
// };

// const rounder2 = rounder(2);

// console.log(rounder2);

// console.log(rounder2(3.4863874374));

// console.log(rounder2(5.3647857354754283));

// const rounder3 = rounder(3);

// console.log(rounder3(4.463776354626));


// Напишіть функцію, яка приймає масив чисел і колбек-функцію. 
// Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати 
// новий масив, що містить результати застосування колбек-функції до кожного елементу.

// const arr = [1, 2, 3, 4, 5];

// const applyCallbackToEachElement = (arr, callback) => {

//     const toCallback = callback(arr);

//     return toCallback;
// }

// const squareCallback = (array) => {

//     let resalt2;

//     for (const number of array) {

//         resalt2 = Math.pow(2, number)

//         return resalt2;
//     } 
// }

// const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result); // [1, 4, 9, 16, 25]

// Розрахунок дисконтної ціни
// Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. 
// Функція повинна приймати вартість товару та відсоток знижки як аргументи. 
// Використайте стрілкову функцію та колбек.
// const calculateDiscountedPrice = (price, discount, callback) => {

//     const discountedPrice = callback(price, discount);

//     return discountedPrice;
//   };

//   const showDiscountedPrice = (price, discount) =>{

//     const totalPrice = price - discount;

//     const messege = `Discounted price: ${totalPrice}`;

//     return messege;
//   };

//   console.log(calculateDiscountedPrice(100, 10, showDiscountedPrice)); // Discounted price: 90



// Знайдіть суму елементів масиву з використанням колбек-функції

// const arr = [1, 2, 3, 4, 5];


// function sumArray(arr, callback) {
//    const sum = callback(arr);

//    return sum;
// }

// function sumElement(array){

//     let totalSum = 0;

//     for (const number of array) {

//         totalSum = totalSum + number;
//     }

//     return totalSum;
// }


// console.log(sumArray(arr, sumElement));

// Напиши стрілкову функцію myNewArrowFunction(), яка приймає всі аргументи за допомогою ...rest і в результаті виводить масив цих аргументів у консоль.
// Для перевірки:


// const myNewArrowFunction = (...rest) => {
//     console.log(rest);

//     return rest;
// };

// myNewArrowFunction(1, 2, 3);
// myNewArrowFunction(100, 200, 300, 400, 500);
// myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

// Напиши стрілкову функцію myAverageScore , яка у якості аргументу отримує масив з оцінками, і виводить користувачу його середній результат у наступному форматі:
// My average score: A (якщо середня оцінка від 91 до 100)
// My average score: B (якщо середня оцінка від 81 до 90)
// My average score: C (якщо середня оцінка від 71 до 80)
// My average score: D (якщо середня оцінка від 70 і менше)
// Для перевірки:

// const myAverageScore = (array) => {

//     let sum = 0;

//     for (const number of array) {
//         sum = sum + number;
//     }

//     const totalSum = sum / array.lenth;

//     if (91 <= totalSum <= 100) {

//         return "My average score: A";
//     } else if (81 <= totalSum <= 90) {

//         return "My average score: B";
//     } else if (71 <= totalSum <= 80) {

//         return "My average score: C";
//     } else if (totalSum <= 70) {

//         return "My average score: D";
//     }
// }

// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));

// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. 
// А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, 
// і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// Оголошена функція getCommonElements(array1, array2)
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
// В циклі for використовувалися методи includes і push

// function getCommonElements(array1, array2) {
//     let commonNumbers;

//     let commonArray = [];

//     for (const number of array1) {

//         const screcComonNumber = array2.includes(number);

//         if (screcComonNumber) {

//             commonArray.push(number);
//         }

//     }

//     return commonArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// _______________________________________________________________________________

// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push

// const createArrayOfNumbers = (min, max) => {

//     let arrayNumber = [];

//     for (let i = min; i <= max; i++) {

//         if (i <= max && i >= min) {

//             arrayNumber.push(i);
//         }
//     }

//     return arrayNumber;
// }

// console.log(createArrayOfNumbers(29, 34));

// _______________________________________________________________________________________

// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.

// Оголошена функція makePizza
// Оголошена змінна result
// Значення змінної result - це рядок "Your pizza is being prepared, please wait."
// Значення змінної result отримане за допомогою виклику функції
// Оголошена змінна pointer
// Значення змінної pointer - це посилання на функцію makePizza 


// Change code below this line



// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const pointer = makePizza;
// const result = pointer();

// console.log(result);

// ___________________________________________________________________________________

// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала її виклик. 
// Функція deliverPizza або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));

// console.log(makeMessage("Ultracheese", deliverPizza));

// Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>".

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName){console.log(`Eating pizza ${pizzaName}`); return `Eating pizza ${pizzaName}`});


// ____________________________________________________________________________________________

// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.


// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// _________________________________________________________________________________________________________________________

// Завдання 2. Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// function createArrayOfNumbers (min, max){

//     let arrayNumber = [];

//     for (let i = min; i <= max; i++) {

//         if (i <= max && i >= min) {

//             arrayNumber.push(i);
//         }
//     }

//     return arrayNumber;
// }

// console.log(createArrayOfNumbers(12, 32));

// ______________________________________________________________________________________________

// Завдання 3. Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті 
// елементи масиву numbers, які більші за значення параметра value (число).

// function filterArray(numbers, value) {
// let newArr = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//  newArr.push(numbers[i])
// }
//   }

// return newArr

// }

// console.log(filterArray([3, 24, 7, 4, 9, 6], 5));

// _______________________________________________________________________________________

// Завдання 1. Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. 
// Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. 
// В іншому випадку функція повинна повернути новий масив повністю.

// Оголошена функція makeArray(firstArray, secondArray, maxLength)
// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
// Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

function makeArray(firstArray, secondArray, maxLength){

    let newArray = [];

    for (const word1 of firstArray) {
        
        if (newArray.length < maxLength){

            newArray.push(word1);
        }
    }

    for (const word2 of secondArray) {
        
        if (newArray.length < maxLength){

            newArray.push(word2);
        }
    }

    return newArray;
};

console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));