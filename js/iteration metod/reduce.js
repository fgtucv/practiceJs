// Array.prototype.reduce() 

// reduce поелементно переберає новий масив може повернути що завгодно заміння всі інші перебераючі методи

// const numberArray = [32, 48, 18, 94, 27, 60, 38, 43];

// const totalSum = numberArray.reduce((sum, num) => sum + num, 0);

// console.log(totalSum);

// sum = 0 => num = 32 => 0 + 32

// sum = 32 => num = 48 => 32 + 48

// sum = 80 => num = 18 => 80 + 18

// sum = 98 => num = 94 => 98 + 94

// sum = 192 => num = 27 => 192 + 27

// sum = 219 => num = 60 => 219 + 60 

// sum = 279 => num = 38 => 279 + 38

// sum = 317 => num = 43 => 317 + 43

// sum = 360

// const salary = {
//     oles: 15000,
//     kiwi: 17000,
//     ajaks: 22000,
//     poly: 16000,
//     mango: 20000,
// }

// const salaryArray = Object.values(salary);

// const totalSalary = salaryArray.reduce((sum, salary) => sum + salary, 0);

// console.log(totalSalary);

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 100, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// const totalPlayedTime = players.reduce((sum, playr) => sum + playr.timePlayed, 0);

// console.log(totalPlayedTime);

// const nameArray = players.reduce((nameArr, plaer) => {
//     nameArr.push(plaer.name)

//     return nameArr;
// }, []);

// console.log(nameArray);

const somePoint = players.reduce((liderPlayer, player) => {

const array = Object.keys(liderPlayer);

    console.log(array);

if(array.length === 0){


    liderPlayer.points = 0;
}

console.log(liderPlayer);
// console.log(player);

if(liderPlayer.points < player.points){
    liderPlayer.points = player.points
    liderPlayer.id = player.id
    liderPlayer.name = player.name
    liderPlayer.online = player.online
    liderPlayer.timePlayed = player.timePlayed
    return liderPlayer;
}
}, {});

console.log(somePoint);

// Object.keys(obj).length == 0