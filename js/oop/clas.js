// const Car = function (carModel) {

//     const { brandCar, modelCar, priceCar } = carModel

//     this.brand = brandCar;

//     this.model = modelCar;

//     this.price = priceCar;
// };

// console.log(Car.prototype)

class Car {
    static messege = "Це тестовий Messege"
    constructor({ brandCar, modelCar, priceCar }) {
        this.brand = brandCar;
        this.model = modelCar;
        this.price = priceCar;
    }
    showPrice() {
        return alert(`Ціна машини: ${this.price}`);
    }
    showInfo() {
        return `Бренд машини: ${this.brand}, Модель машини: ${this.model}, Ціна машини: ${this.price}.`;
    }
};

const myCar = new Car({
    brandCar: "Mazda",
    modelCar: "S4",
    priceCar: "15000",
});

const broherCar = new Car({
    brandCar: "Lada",
    modelCar: "Vesta",
    priceCar: "10000",
});

const bmwCar = new Car({
    brandCar: "bmw",
    modelCar: "X5",
    priceCar: "20000",
});

console.log(myCar.showInfo())

console.log(broherCar.showInfo());