let LivingCreature = require("./LivingCreature")

module.exports =class Empty extends LivingCreature{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 50;
        this.directions = []


    }
}