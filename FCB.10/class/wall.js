let LivingCreature = require("./LivingCreature")

module.exports=class Wall extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 10;
        
    }
   
   
}