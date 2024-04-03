export function setPixel(imageData, x, y, pointRgba) {
    if (x < imageData.width && y < imageData.height) {
        var index = (x + y * imageData.width) << 2;
        imageData.data[index + 0] = pointRgba[0]; // R
        imageData.data[index + 1] = pointRgba[1]; // G
        imageData.data[index + 2] = pointRgba[2]; // B
        imageData.data[index + 3] = pointRgba[3]; // A
    }
}