class Character {
    constructor(name) {
        this.name = name;
    }

    attack() {
        console.log(this.name + "uses attack");
    }
}

class Rogue extends Character {
    constructor(name) {
        super(name);
    }

    attack() {
        console.log(this.name + ' uses Sinister Strike. ');
    }
}
let d = new Rogue('Dekutree');
d.attack();