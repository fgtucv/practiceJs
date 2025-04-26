// Array.prototype.flatMap(callback)

// комбінація методів flat та map 

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false, tracks: ["Червона калина", "Ой  на горі два дубки" , "Залізна ластівка"] },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true, tracks: ["Червона калина", "Ой  на горі два дубки" , "Залізна ластівка"] },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true, tracks: ["Червона калина", "Ой  на горі два дубки" , "Залізна ластівка"] },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false, tracks: ["Червона калина", "Ой  на горі два дубки" , "Залізна ластівка"] },
//     { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true, tracks: ["Червона калина", "Ой  на горі два дубки" , "Залізна ластівка"] },
// ];

// const songs = players.flatMap((player) => player.tracks).sort();

// console.log(songs);

const numberArray = [3, 8, 2, 3, 8, 2, 3, 9, 4, 2, 8, 2, 3, 1, 6];

const newNumberArray = numberArray.filter((num) => num % 2 === 0).map((num) => num * 3).sort((a, b) => a - b);

console.log(newNumberArray);