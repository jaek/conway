var mainCanvas = document.getElementById("viewport");
var mainContext = mainCanvas.getContext("2d");

var canvasWidth = mainCanvas.width;
var canvasHeight = mainCanvas.height;
var pixel_x = canvasWidth / 20;
var pixel_y = canvasWidth / 20;

var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

Array.matrix = function (numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
        var columns = [];
        for (var j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}

function draw_screen() {
    var xi = 0;
    var yi = 0;
    for (x = 0; x < canvasWidth; x += 20) {
        yi = 0;
        for (y = 0; y < canvasHeight; y += 20) {
            if (board[xi][yi] === 1) {
                ctx.beginPath();
                ctx.rect(x, y, 20, 20);
                ctx.fill();
                board[xi][yi] = 0;
            } else {
                board[xi][yi] = 1;
            }
            yi++;
        }
        xi++;
    }
    requestAnimationFrame(draw_screen);
}

var my_board = Array.matrix(pixel_x, pixel_y, 1);
draw_screen(mainCanvas, my_board);