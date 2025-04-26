// spreadо (розпилення)

const friendArray = ["Fgtucv", "Mango", "Poly", "Max"];

const familiarPeople = ["Mango", "Chelsea", "Mango", "Poly", "Ajax"];

const getsList = ["Fred", ...familiarPeople, ...friendArray, "Jho"];

console.log(getsList);

// const friendAndFamiliarPeople = friendArray.concat(familiarPeople);

const friendAndFamiliarPeople = [...friendArray, ...familiarPeople];

function showFriend(name1, name2, name3, name4){

    return `friend1 - ${name1}, friend2 - ${name2}, friend3 - ${name3}, friend4 - ${name4}`;
}

showFriend(...friendArray);

console.log(showFriend(...friendArray));

// розпиленя обєктів

const user = {
    name: "Max",
    age: 12,
};

const userLocation = {
    name: "Mango",
    location: "Copengagen",
};

const infoUser = {
    ...user, 
    ...userLocation,
};

// const infoUser = {
//     name: "Max",
//     age: 12,
//     name: "Mango",
//     location: "Copengagen",
// }

console.log(infoUser);