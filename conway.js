window.onload = function () {
    var canvas = document.getElementById("viewport");
    var context = canvas.getContext("2d");

    var width = canvas.width;
    var height = canvas.height;
    var px = 20;
    var py = 20; //The height and width of pixels
    var flag = true;
    function draw_screen(ctx) {
        for (x = 0; x < width; x += px) {
            for (y = 0; y < height; y += py) {
                if (flag === true) {
                    ctx.beginPath();
                    ctx.rect(x, y, px, py);
                    ctx.fill();
                    flag = false;
                } else {
                    flag = true;
                }

            }
        }
    }

    draw_screen(context);
};