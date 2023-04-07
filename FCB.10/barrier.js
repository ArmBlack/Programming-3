class Barrier{
    constructor(x,y){
        this.x = x
        this.y = y
        this.directions = [
                [this.x - 5, this.y - 5],
                [this.x, this.y - 5],
                [this.x + 5, this.y - 5],
                [this.x - 5, this.y],
                [this.x + 5, this.y],
                [this.x - 5, this.y + 5],
                [this.x, this.y + 5,]
                [this.x + 5, this.y + 5]
                          ]

                    }
      getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
}
}