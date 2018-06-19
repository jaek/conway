window.onload = function () {
    var canvas = document.getElementById("viewport");
    var context = canvas.getContext("2d");

    var width = canvas.width;
    var height = canvas.height;
    let px = 20;
    let py = 20; //The height and width of pixels
    var flag = true;
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
        ;
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
    var test = Array.matrix(5, 5, 0);
    test[0][0] = 1;
    test[0][1] = 1;
    draw_screen(context, test);


};