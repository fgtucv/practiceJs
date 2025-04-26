class Hero {
    constructor({ name = "hero", points = 0 }) {
        this.heroName = name;
        this.points = points;
    }
    showHeroInfo() {
        return `Ім'я персонажа: ${this.heroName}, Балли персонажа: ${this.points}`
    }
};

class Elf extends Hero {
    constructor({ elfHair, elfAge, ...elfHero }) {

        super(elfHero);
        this.hair = elfHair;
        this.age = elfAge;
    }

    magicOn(){
        return `Elf ${this.heroName} запустив магію`;
    }
};

const elfRoland = new Elf({
    name: "Roland",
    points: 243,
    elfHair: "black",
    elfAge: 19,
});

const elfFero = new Elf({
    name: "Fero",
    points: 176,
    elfHair: "brown",
    elfAge: 22,
});

console.log(elfRoland.showHeroInfo());

class Ork extends Hero {
    constructor({ orkSkinColor, orkGrowth, ...orkHero }) {
        super(orkHero);
        this.skin = orkSkinColor;
        this.growth = orkGrowth;
    }

    orkDropBomb(){
        return `Ork ${this.heroName} скинув бомбу`;
    }
}

const orkBudulay = new Ork({
    name: "Budulay",
    points: 218,
    orkGrowth: 214,
    orkSkinColor: "brown",
});

const orkTuzic = new Ork({
    name: "Tuzic",
    points: 187,
    orkGrowth: 219,
    orkSkinColor: "green",
});

console.log(orkBudulay.showHeroInfo());

function starGame(){
console.log(orkBudulay.orkDropBomb());
console.log(elfRoland.magicOn());
console.log(orkTuzic.orkDropBomb());
console.log(elfFero.magicOn());
}

console.log(starGame())