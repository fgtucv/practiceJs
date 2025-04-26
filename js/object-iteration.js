const feedback = {
    good: 5,
    natural: 3,
    badly: 1,
};

let totalFeedback = 0;

// console.log(Object());

// const arrayKeys = Object.keys(feedback);

// for (const key of arrayKeys) {
//     totalFeedback = totalFeedback + feedback[key];
// }

// console.log(arrayKeys);

// console.log(totalFeedback);

// const arrayValues = Object.values(feedback);

// console.log(arrayValues);

// for (const value of arrayValues) {
//     totalFeedback += value;
// }

// console.log(totalFeedback);

// const arrayEntries = Object.entries(feedback);

// console.log(arrayEntries);

// Вийшло

// const arrayEntries = [
//     ["good", 5],
//     ["natural", 3],
//     ["badly", 1]
// ]

//   робота з колекцією

const friendsArray = [
    {
        name: "Mango",
        status: "online",
    },
    {
        name: "Kiwi",
        status: "ofline",
    },
    {
        name: "Poly",
        status: "ofline",
    },
    {
        name: "Ajax",
        status: "ofline",
    },
];

for (const friend of friendsArray) {
    friend.city = "Kosiv";
}

// const friendName = prompt("Введіть імя");

// function findFriendByName(){
//     for (const friend of friendsArray) {
//         if(friend.name === friendName){
//             return "Друга знайдено";
//         }
//     }
// }

// findFriendByName();

// console.log(findFriendByName());

// function findFriendStatus(){

//     let onlineFriend = [];

//     for (const friend of friendsArray) {
//         if(friend.status === "online"){
//             onlineFriend.push(friend);
//         }
//     }

//     return onlineFriend;
// }

// findFriendStatus();

// console.log(findFriendStatus());

// function createNameArray() {
//     let newNameArray = [];
//     for (const friend of friendsArray) {
//         newNameArray.push(friend.name);
//     }

//     return newNameArray;
// }

// createNameArray();

// console.log(createNameArray());

//   - getItems()
//   - add(product)
//   - remove(productName)
//   - clear()
//   - countTotalPrice()
//   - increaseQuantity(productName)
//   - decreaseQuantity(productName)

const addProduct = {
    name: "🍐",
    price: 65,
};

const products = [
    {
        name: "🍍",
        price: 65,
    },
    {
        name: "🥥",
        price: 85,
    },
    {
        name: "🍉",
        price: 55,
    },
];

const basket = {
    products: [
        { name: "🍎", price: 50, quantity: 1 },
        { name: "🍇", price: 70, quantity: 1 },
        { name: "🍋", price: 60, quantity: 1 },
        { name: "🍓", price: 110, quantity: 1 },
    ],
    // products: [
    //     { name: "Apple", price: 50 },
    //     { name: "Grape", price: 70 },
    //     { name: "Lemon", price: 60 },
    //     { name: "Strawberries", price: 110 },
    // ],
    getItems() {
        console.log(this.products);
    },
    add(product) {
        this.products.push(product);

        return this.products;
    },
    remove(productName) {
        for (const product of this.products) {
            if (product.name === productName) {

                const index1 = this.products.indexOf(product);

                this.products.splice(index1, 1);

                break;
            }
        }
        return this.products;
    },
    clear() {
        this.products = [];
        return this.products;
    },
    increaseQuantity(productName, num) {
        for (const product of this.products) {
            if (product.name === productName) {
                product.quantity = product.quantity + num;
                return product.quantity;
            };
        };
    },
    decreaseQuantity(productName, num) {
        for (const product of this.products) {
            if (product.name === productName) {
                product.quantity = product.quantity - num;
                return product.quantity;
            };
        };
    },

};

// basket.getItems()

// console.log(basket.add(addProduct));

// console.log(basket.remove("Strawberries"));

// console.log(basket.clear());

console.log(basket.increaseQuantity("🍎", 3));

console.log(basket.decreaseQuantity("🍎", 2));