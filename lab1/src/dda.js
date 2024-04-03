import { setPixel } from "./pixel.js";

export function lineDDA(imageData, p, lineRgba) {
    var p1 = {x: p[0][0],
              y: p[0][1]}
    var p2 = {x: p[1][0],
              y: p[1][1]}
    var dx = p2.x - p1.x, dy = p2.y - p1.y;

    if (dx == 0 && dy == 0) {
        return;
    }
    if (Math.abs(dy) <= Math.abs(dx)) { 
        if (p2.x < p1.x) {
            var tx = p1.x; p1.x = p2.x; p2.x = tx;
            var ty = p1.y; p1.y = p2.y; p2.y = ty;
        }
        var k = dy / dx;
        var y = p1.y;
        for (var x = p1.x; x <= p2.x; x++) {
            setPixel(imageData, x, Math.floor(y + 0.5), lineRgba);
            y = y + k;
        }
    }
    else {
        if (p2.y < p1.y) {
            var tx = p1.x; p1.x = p2.x; p2.x = tx;
            var ty = p1.y; p1.y = p2.y; p2.y = ty;
        }
        var k = dx / dy;
        var x = p1.x;
        for (var y = p1.y; y <= p2.y; y++) {
            setPixel(imageData, Math.floor(x + 0.5), y, lineRgba);
            x = x + k;
        }
    }
    
}