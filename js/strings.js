const firstName = "Oles";

const lastName = "Slava";

const gap = ' ';

const fullName = firstName + gap + lastName;

console.log(fullName);

// const a = `${firstName} ${lastName}`;

// console.log(a);


// Напиши скрипт який виведе рядок в форматі:
// «Гість x y поселяється в z номері q», підставиnb замість x y z q значення змінних

const x = "Oles";

const y = "Slava";

const z = "vip";

const q = "56";

// const res = `Гість ${x} ${y} поселяється в ${z} номері ${q}`; 

const res = "Гість" + " " + x + " " + y + " " + "поселяється в" + " " + z + " " + "номері" + " " + q;

console.log(res);


// Ви замовляєте ? холодильників.

// const numberOfRefrigerators = prompt("Скільки холодильників ви замовляєте");

// const youOrder = alert("Ви замовляєте" + " " + numberOfRefrigerators + " " + "холодильників");

// const youOrder = confirm(`Ви замовляєте ${numberOfRefrigerators} холодильників`);

// console.log(youOrder);


let brend = "SuMsuNg";

console.log(brend[2]);

// brend = brend[0] + brend[brend.length - 1];

brend = brend.slice(0, 1) + brend.slice(brend.length - 1);

console.log(brend);


// let brend2 = prompt("Ведіть бренд:");

// brend2 = brend2.toLocaleLowerCase();

// brend2 = brend2.toLocaleUpperCase();

// console.log(brend2);

// метод includes()

let word1 = "спам";

let word2 = "Розпродаш";

let messeg1 = 'Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!';

let messeg2 = ' Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';

let messeg3 = 'Рекламна компанія #fatlivesmatter';

console.log(messeg1.includes(word1));

console.log(messeg2.includes(word1));

console.log(messeg3.includes(word1));

console.log(messeg1.includes(word2));

console.log(messeg2.includes(word2));

console.log(messeg3.includes(word2));

// метод indexOf()

const index = messeg1.indexOf(", це");

console.log(index);

// const a = messeg3.startsWith("Рекл");

const a = messeg2.endsWith("ь!");

console.log(a);

// метод trim() обрізає пробіли на початку і вкінці рядка

console.log(messeg2.trim());

const longMesseg = messeg3.padEnd(50,"!");

console.log(longMesseg);

console.log(messeg2.padStart(80, "$"));

const word = messeg1.slice(10, 21) ;

console.log(word);

console.log(messeg2.slice(25))