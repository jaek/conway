var canvas = document.getElementById("viewport");
var context = canvas.getContext("2d");
console.log(context);

var width = canvas.width;
var height = canvas.height;
let px = 20;
let py = 20; //The height and width of pixels

let board_width = width / px;
let board_height = height / py;

function draw_screen(ctx, board) {
    var xi = 0;
    var yi = 0;
    for (x = 0; x < width; x += px) {
        yi = 0;
        for (y = 0; y < height; y += py) {
            if (board[xi][yi] === 1) {
                ctx.beginPath();
                ctx.rect(x, y, px, py);
                ctx.fill();
            }
            yi++;
        }
        xi++;
    }
}
function make_move(board, numrows, numcols) {
    for (x = 0; x < numrows; ++x) {
        for (y = 0; y < numcols; ++y) {
            var neighbours = get_neighbours(x, y, board, numrows, numcols);
            if (board[x][y] == 0 && neighbours === 3) {
                board[x][y] = 1;
            } else if (board[x][y] == 1 && (neighbours == 2 || neighbours == 3)) {
                board[x][y] = 1;
            } else {
                board[x][y] = 0;
            }
        }
    }
}

function get_neighbours(pos_x, pos_y, board, numrows, numcols) {
    var neighbours = 0;
    var x = pos_x - 1;
    var y = pos_y - 1;
    if (x < 1) {
        x++;
    }
    if (y < 1) {
        y++;
    }
    while (x < numrows && x <= pos_x + 1) {
        y = pos_y - 1;
        while (y < numcols && y <= pos_y + 1) {
            neighbours += board[x][y];
            y++;
        }
        x++;
    }

    return neighbours - board[pos_x][pos_y]; //account for self
}

function loop(board, board_width, board_height) {
    var canvas = document.getElementById("viewport");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, width, height);
    make_move(board, board_width, board_height);
    draw_screen(context, board);
    console.log("test");
    requestAnimationFrame(loop);
}


//implementation of multidimensional array from The Good Parts 
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
var board = Array.matrix(board_width, board_height, 0);
board[1][2] = 1;
board[2][2] = 1;
board[1][1] = 1;
board[2][1] = 1;
board[3][1] = 1;

var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;

loop(board, board_width, board_height, context);

