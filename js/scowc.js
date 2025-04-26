// блочна облась видимості зміних

const balance = 1000;

let message;

if (balance > 0){
message = "Позитивний баланс"
} else {
    message = "Негативний баланс"
}

console.log(message);

if (true){
    const a = 5
    
    // console.log(b) Не буде видно через блочну область видимості
}
if (true){
    const b = 10

    console.log(a)
}