//   прототип обєкту це обєкт на базі якого був створений екзимпляр

const objectA = {
    x: "45.32.67.38",
};

const objectB = Object.create(objectA);

objectB.y = "BO 5674 HK"

console.log(objectB.x);

for (const key in objectB) {
    if (objectB.hasOwnProperty(key)) {
        console.log(objectB);
    }
};

const objectC = Object.create(objectB);

objectC.z = "+380 65 10 ";

for (const key in objectC) {
    console.log(key);
}

console.log(objectC);

console.log(objectC.__proto__)


// алгоритм пошуку властивоти в ланцюжку прототипів

// 1. пошук починаєтся у власних властивостях

// 2. якщо властивості немає у власних то пошук переходить до ланцюжка прототипів

// 3. пошук припення єтся при першому співпадіні якщо є така властивість

// 4. вертаєтся значення зазначеної властивості