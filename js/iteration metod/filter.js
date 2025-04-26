// Array.prototype.filter()

// він поелементно переберає оригінальний масив вертає новий масив якщо жоден з елементі не підпадає під умову фільтра, в новий масив фільтер 
// додеє елемени які задовільняють умову колбек функції

// якщо кулбек вернув true то елемент додаєтся в новий масив а якщо кулбек вернув false то елемент не додаєтся в новий масив

// const numberArray = [45, 37, 84, 17, 13, 86, 39, 92, 78, 12, 48]

// const filterdArray = numberArray.filter((number) => 10 < number && number < 40);

// console.log(filterdArray);

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// const onlinePlayer = players.filter((player) => player.online);

// console.log(onlinePlayer);

// відфільтруємо гравці в яких час гри більший ніж 250

const filterPlayer = players.filter(player => player.timePlayed > 250);

console.log(filterPlayer);