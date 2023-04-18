let LivingCreature = require("./LivingCreature")

module.exports=class Wall extends LivingCreature{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        
    }
   
   
}