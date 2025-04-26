// основи ООП: клас, екземпляр(обєкти), інтерфейс.

// функції конструктори

// const Car = function (carModel) {

//     this.brand = carModel.brandCar;

//     this.model = carModel.modelCar;

//     this.price = carModel.priceCar;
// };

const Car = function (carModel) {

    const { brandCar, modelCar, priceCar } = carModel

    this.brand = brandCar;

    this.model = modelCar;

    this.price = priceCar;
};

// якщо функція викликаєтся через оператора new то створюєтся прожній обєкт

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

console.log(bmwCar);

// у кожного обєкта є властивівсть proto

// в цій властивості лежить посилання на його ПРОТОТИП  

// при створенні літералу обєкту у влатсивість proto записуєтся посилання на function.protype

// фуекція конструктор це звичайна функція на базі якої оператор new створює новий обєкт