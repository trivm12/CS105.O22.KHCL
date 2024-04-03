import { setPixel } from "./pixel.js";

export function lineBresenham(imageData, p, lineRgba) {
    var p1 = {x: p[0][0],
              y: p[0][1]}
    var p2 = {x: p[1][0],
              y: p[1][1]}
    var dx = p2.x - p1.x, dy = p2.y - p1.y;

    if (dx == 0 && dy == 0) {
        return;
    }
    if (Math.abs(dy) <= Math.abs(dx)) {
        if (p1.x > p2.x) {
            var tx = p1.x; p1.x = p2.x; p2.x = tx;
            var ty = p1.y; p1.y = p2.y; p2.y = ty;
        }
        var p = 2 * dy - dx;
        var y = p1.y;
        var k = 1;
        if (dy / dx < 0) k = -1;
        for (var x = p1.x; x <= p2.x; x++) {
            setPixel(imageData, x, y, lineRgba);
            if (p < 0) {
                p = p + 2 * Math.abs(dy);
            }
            else{
                p = p + 2 * Math.abs(dy) - 2 * Math.abs(dx);
                y = y + k;
            }
        }
    }
    else {
        if (p1.y > p2.y) {
            var tx = p1.x; p1.x = p2.x; p2.x = tx;
            var ty = p1.y; p1.y = p2.y; p2.y = ty;
        }
        var p = 2 * dx - dy;
        var x = p1.x;
        var k = 1;
        if (dy / dx < 0) k = -1;
        for (var y = p1.y; y <= p2.y; y++) {
            setPixel(imageData, x, y, lineRgba);
            if (p < 0) {
                p = p + 2 * Math.abs(dx);
            }
            else{
                p = p + 2 * Math.abs(dx) - 2 * Math.abs(dy);
                x = x + k;
            }
        }
    }
}