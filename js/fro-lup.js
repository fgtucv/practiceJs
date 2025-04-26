// цикл for

// for (let i = 0; i < 10; i += 1){
// console.log(i)
// }


// Напиши скрипт який підрахує загальну суму зарплат працівників.
//  * Кіл-ть працівників зберігається в змінній employees.
//  * Зарплата кожного працівника це випадкове число овід 500 до 5000
//  * Записати суму в змінну totalSalary та вивести в консоль

// let totalSalary = 0;

// const employees = 6;

// const minSalary = 500;

// const maxSalary = 5000;

// for (let i = 1; i <= employees; i += 1){
// const salary = Math.random() * (maxSalary - minSalary) + minSalary

// totalSalary = totalSalary + salary

// console.log(`Зарплата працівники номер ${i} - ${salary}`)
// }

// console.log(totalSalary);

// * Напиши скрипт який підрахує суму всіх парних чисел,
//  * які входять в діапазон чисел в змінних від min до max.
//  * Наприкад, якщо min=0 та max=5, то діапазон 0-5, та в ньому два парні числа - 2 та 4, їх сума 6.

// const min = 4;

// const max = 100;

// let total = 0;

// for (let i = min; i <= max; i++){


// if (i % 2 === 0 ){
//     total += i 
// }

// }

// console.log(total)

// i += 1 те саме що i++

// for (let i = 0; i <= 100; i++){
// if (i % 5 !== 0){
// continue
// }
// console.log(i)
// }


// for (let i = 12; i <= 27; i++){
// if (i !== 25){
// continue
// }
// console.log(i)
// }

// let pasword;

// do while

// do {
//     pasword = prompt("Введіть пароль")
//   } while (pasword.length < 5);

//   while

let counter = 0;

  while (counter < 10 ) {
    counter = counter + 1

    console.log(counter)

  }