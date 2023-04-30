var express = require("express")
var app = express()

var server = require("http").Server(app)
var io = require("socket.io")(server)
var fs = require("fs")



app.use(express.static("."))


// app.get("/",function(req,res){
//     res.redirect("start.html")
// })
app.get("/",function(req,res){
    res.redirect("index.html")
})

server.listen(3000,function(){
    console.log("Run")

})

function matrixGenerator(matrixSize, grass, grassEater, predator, ball, wall, player, divader, eaterHelper,meteor,empty) {
    var matrix = []

    for (var i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (j = 0; j < matrixSize; j++) {
            matrix[i].push(0)

        }
    }


    for (let i = 0; i < grass; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            
            matrix[y][x] = 1 
        }

    }

    for (let i = 0; i < grassEater; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            
            matrix[y][x] = 2
        }

    }
    for (let i = 0; i < empty; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            
            matrix[y][x] = 10
        }

    }


    for (let i = 0; i < predator; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            
            matrix[y][x] = 3
        }

    }

    for (let i = 0; i < ball; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            
            matrix[y][x] = 4
        }


    }




    for (let i = 0; i < wall; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            
            matrix[y][x] = 5
        }


    }


    for (let i = 0; i < player; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            
            matrix[y][x] = 6
        }

    }
    

    // for (let i = 0; i < matrixSize; i++) {
    //     for (let j = 0; j < matrixSize; j++) {

    //         if (i == j || i + j == matrix.length > 1) {
    //             matrix[i][j] = 9
    //         }
    //     }

    // }
    for (let i = 0; i < divader; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            
            matrix[y][x] = 7
        }


    }

    for (let i = 0; i < eaterHelper; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        if (matrix[y][x] == 0) {
            
            matrix[y][x] = 8
        }


    }

    for (let i = 0; i < meteor; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 9

    }
    // for (let i = 0; i < Police; i++) {

    //     var x = Math.floor(Math.random() * matrixSize)
    //     var y = Math.floor(Math.random() * matrixSize)

    //     matrix[y][x] = 11

    // }


    return matrix


}

matrix = matrixGenerator(30,30,15,25,2,6,21,20,24,25,46)

io.sockets.emit("send matrix", matrix)


grassArr = []
grassEaterArr = []
predatorArr = []
ballArr = []
wallArr = []
playerArr = []
divaderArr = []
EaterHelperArr = []
metiorArr = []
emptyArr = []

Grass = require("./class/grass")
GrassEater = require("./class/grassEater")
Predator = require("./class/predator")
Ball = require("./class/ball")
Wall = require("./class/wall")
Player = require("./class/player")
Divader = require("./class/divader")
EaterHelper = require("./class/EaterHelper")
Meteor = require("./class/meteor")
Empty = require("./class/empty")

function createObject(){
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y)
                predatorArr.push(pred)
            } else if (matrix[y][x] == 4) {
                var ba = new Ball(x, y)
                ballArr.push(ba)
            } else if (matrix[y][x] == 5) {
                var wall = new Wall(x, y)
                wallArr.push(wall)
            } else if (matrix[y][x] == 6) {
                var play = new Player(x, y)
                playerArr.push(play)
            } else if (matrix[y][x] == 7) {
                var  div = new Divader(x, y)
                divaderArr.push(div)
            } else if (matrix[y][x] == 8) {
                var  help= new EaterHelper(x, y)
                EaterHelperArr.push(help)
            }else if (matrix[y][x] == 9) {
                var  help= new Meteor(x, y)
                metiorArr.push(help)
             }
        }
    }
    io.sockets.emit("send matrix",matrix)
}

function AddGrass(){
    for(let i = 0; i < 5 ;i++){

        var x = Math.floor(Math.random() * matrix.length)
        var y = Math.floor(Math.random() * matrix.length)

               matrix[y][x] = 1

               var gr = new Grass(x,y)

               grassArr.push(gr)


    }
}

io.on("connection",function (socket){
    createObject()
    socket.on("addGrass",AddGrass)
})

function AddGrassEater(){
    for(let i = 0; i < 3 ;i++){

        var x = Math.floor(Math.random() * matrix.length)
        var y = Math.floor(Math.random() * matrix.length)

               matrix[y][x] = 2 
               matrix[y][x] = 8

               var gr = new GrassEater(x,y)

               grassEaterArr.push(gr)
            
               var grh = new EaterHelper

               EaterHelperArr.push(grh)

    }
}
function AddEaterHelper(){
    for(let i = 0; i < 3 ;i++){

        var x = Math.floor(Math.random() * matrix.length)
        var y = Math.floor(Math.random() * matrix.length)

               
               matrix[y][x] = 8

               
            
               var grh = new EaterHelper

               EaterHelperArr.push(grh)

    }
}
function AddPredator(){
    for(let i = 0; i < 3 ;i++){

        var x = Math.floor(Math.random() * matrix.length)
        var y = Math.floor(Math.random() * matrix.length)

               matrix[y][x] = 3

               var gr = new Predator(x,y)

               predatorArr.push(gr)


    }
}
function Winter() {
    weath = "winter";
    io.sockets.emit('Winter', weath);
}

function Summer() {
    weath = "summer";
    io.sockets.emit('Summer', weath);
}

function Spring() {
    weath = "spring";
    io.sockets.emit('Spring', weath);
}
function Autumn() {
    weath = "autumn";
    io.sockets.emit('Autumn', weath);
}
io.on("connection",function (socket){
    createObject()
    socket.on("AddPredator",AddPredator)
})

io.on("connection",function (socket){
    createObject()
    socket.on("addGrassEater",AddGrassEater)
})
io.on("connection",function (socket){
    createObject()
    socket.on("AddEaterHelper",AddEaterHelper)
})
function game(){
    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()

    }



    for (let i in predatorArr) {
        predatorArr[i].eat()
    }


    for (let f in ballArr) {
        ballArr[f].eat()
    }


    for (let i in playerArr) {
        playerArr[i].eat()
    }
    for (let i in wallArr) {
        wallArr[i]
    }
    for (let i in divaderArr) {
        divaderArr[i].move()
    }
    for (let i in EaterHelperArr) {
        EaterHelperArr[i].move()
    }
    for (let i in metiorArr) {
        metiorArr[i].move()
    }
    io.sockets.emit("send matrix",matrix)
}

setInterval(game,200)



// function Reset(){
// window.location.Restart()
// }

function KillAll() {
    grassArr = []
    grassEaterArr = []
    predatorArr = []
    ballArr = []
    
    playerArr = []
    divaderArr = []
    EaterHelperArr = []

    
    
    
    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
    io.sockets.emit("send matrix",matrix)
}

io.on("connection",function (socket){
    createObject()
    socket.on("killAll",KillAll)
})


var statistics = {}

setInterval(function(){
    statistics.grass = grassArr.length
    statistics.grassEater = grassEaterArr.length;
    statistics.predator = predatorArr.length;
    statistics.ball = ballArr.length;
    statistics.wall = wallArr.length;
    statistics.player = playerArr.length;
    statistics.divader = divaderArr.length;
    statistics.EaterHelper = EaterHelperArr.length;
    statistics.metior = metiorArr.length;
    statistics.empty = emptyArr.length;
   
     fs.writeFile("statistics.json",JSON.stringify(statistics),function(){
   
     })
   },1000)