// Array.prototype.forEach(callback(currentValue, index, array), thisArg)

// метод forEah поелементно переберає, нічого не вертає заміняє класичний for якщо не треба перевати цикл

const numberArray = [23, 45, 12, 56, 89, 73];

numberArray.forEach((number, index, arr) => {
alert(`Число - ${number} має порядковий індекс ${index} у масиві ${arr}, кількість елементів в масиві складає ${arr.length}`)
});

