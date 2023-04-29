var socket = io()
var side = 35


function setup() {
    frameRate(7)
    createCanvas(30 * side,30 * side)

  
    
}
///dsssdadadwaq
function draws(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            var tobot = side - side * 0.1
            textSize(tobot)


            if (matrix[y][x] == 1) {
                fill("green")
                rect(x * side, y * side, side, side)
                text("☘️", x * side, y * side + tobot)
            } else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side)
                text("🐏", x * side, y * side + tobot)
            } else if (matrix[y][x] == 0) {
                fill("gray")
                rect(x * side, y * side, side, side)

            } else if (matrix[y][x] == 3) {

                fill("red")
                rect(x * side, y * side, side, side)
                text("🐕", x * side, y * side + tobot)
            }
            else if (matrix[y][x] == 4) {
                fill("orange")
                rect(x * side, y * side, side, side)
                text("⚽️", x * side, y * side + tobot)
            }
            else if (matrix[y][x] == 5) {
                fill("#783f04")
                rect(x * side, y * side, side, side)
                text("🧱", x * side, y * side + tobot)
            } else if (matrix[y][x] == 6) {

                fill("#bf9e13")
                rect(x * side, y * side, side, side)
                text("🤾🏿", x * side, y * side + tobot)
            } else if (matrix[y][x] == 7) {

                fill("#8500FA")
                rect(x * side, y * side, side, side)
                text("😈", x * side, y * side + tobot)
            } else if (matrix[y][x] == 8) {
                fill("black")
                rect(x * side, y * side, side, side)
                text("🐄", x * side, y * side + tobot)
            }else if (matrix[y][x] == 9) {
                fill("black")
                rect(x * side, y * side, side, side)
                text("☄️", x * side, y * side + tobot)
            }




        }

    }

    

   

}
function  Reset(){
    window.location.reload()
}

function KillAll(){
    socket.emit("killAll");
}

function AddGrass(){
    socket.emit("addGrass");
}
function AddGrassEater(){
    socket.emit("addGrassEater");
}
function AddPredator(){
    socket.emit("AddPredator");
}
function AddEaterHelper(){
    socket.emit("AddEaterHelper");
}



socket.on("send matrix",draws)