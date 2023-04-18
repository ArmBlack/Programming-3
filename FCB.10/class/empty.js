let LivingCreature = require("./LivingCreature")

module.exports =class Empty extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 50;
        this.directions = []


    }
}