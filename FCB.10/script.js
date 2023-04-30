var socket = io()
var side = 35

socket.on('Winter',function (data){
    weather = data
})
socket.on('Summer',function (data){
    weather = data
})
socket.on('Spring',function (data){
    weather = data
})
socket.on('Autumn',function (data){
    weather = data
})
function setup() {
    createCanvas(30 * side,30 * side)

  
    
}


var weather = "winter"

function draws(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {

            var tobot = side - side * 0.1
            textSize(tobot)
            // var weather = "spring"

            if (matrix[y][x] == 1) {
                if (weather == "spring") {
                        fill("green");
                        rect(x * side, y * side, side, side);
                        text('🌿', x * side, y * side + tobot);
                } else if (weather == "summer") {
                        fill("darkgreen");
                        rect(x * side, y * side, side, side);
                        text('☘️', x * side, y * side + tobot);
                } else if (weather == "autumn") {
                        fill("yellow");
                        rect(x * side, y * side, side, side);
                        text('🍁', x * side, y * side + tobot);
                } else if (weather == "winter") {
                        fill("rgb(0, 123, 255)");
                        rect(x * side, y * side, side, side);
                        text('❄️', x * side, y * side + tobot);
                }
            } else if (matrix[y][x] == 2) {
                if (weather == "spring" ){
                        fill("brown")
                        rect(x * side, y * side, side, side);
                        text('🐂', x * side, y * side + tobot);
                }else if(weather == "summer"){
                fill("yellow")
                rect(x * side, y * side, side, side);
                text('🐑', x * side, y * side + tobot);
          //     
            }else if(weather == "autumn"){
                fill("red")
                rect(x * side, y * side, side, side);
                text('🐏', x * side, y * side + tobot);
                 
            }else if (weather == "winter") {
                        fill("#b1b4b5")
                        rect(x * side, y * side, side, side);
                        text('🐄', x * side, y * side + tobot);
                }
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

function Winter() {
    socket.emit("winter");
}
function Summer() {
    socket.emit("summer");
}
function Spring() {
    socket.emit("spring");
}
function Autumn() {
    socket.emit("autumn");
}

socket.on("send matrix",draws)