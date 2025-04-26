// Array.prototype.sort(callback(currentEl, nextEl){})

// сортує та змінює оригінальний масив позамовчуванню сортує по зростаню прводить елемети до рядка та сортує по uni коду

// const numberArray = [3, 5, 8, 2, 3, 9, 6];

// const copyNumberArray = [...numberArray];

// const sortedNumber = copyNumberArray.sort((currentElement, nextelement) => nextelement - currentElement);

// console.log(sortedNumber);

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// const copyPlayersArray = [...players];

// const sortedPlayerPoints = copyPlayersArray.sort((currentElement, nextElement) => nextElement.points - currentElement.points);

// console.log(sortedPlayerPoints);

const copyPlayersArray = [...players];

const sortedPlayerName = copyPlayersArray.sort((currentElement, nextElement) => currentElement.name.localeCompare(nextElement.name));

console.log(sortedPlayerName);