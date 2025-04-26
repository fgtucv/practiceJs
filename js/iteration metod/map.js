// Array.prototype.map()

// метод .map по елементно перебирає масив, не змінює оригінальний масив і вертає новий масив такоїж довжина як і оригінал

// const numberArray = [23, 45, 12, 56, 89, 73];

// const newNumbers = numberArray.map((number) => {

// return number + 1;
// });

// console.log(newNumbers);

// console.log(numberArray);

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];

//   отримати масив імен всіх гравців

// const playersName = players.map((player) => player.name);

// console.log(playersName);

// збільшуємо кількість пойнтів гравця на 10%

// const addPoint = players.map((player) => ({...player, points: player.points + (player.points * 10 / 100)}));

// console.log(addPoint);

// збільшити кількість годин гравця за id

const playerID = prompt("Введіть імя гравця");

const addTime = prompt("На скільки годин збільшити");

// const addPlaedTime = players.map((player) => {
// if(playerID === player.id){
// return ({...player, timePlayed: player.timePlayed + Number(addTime)
// })}
// return {...player}
// });

// console.log(addPlaedTime);

/* <умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна></вираз_якщо_умова_хибна> */

const addPlaedTime = players.map((player) => playerID === player.id ? {...player, timePlayed: player.timePlayed + Number(addTime)} : player );

console.log(addPlaedTime);