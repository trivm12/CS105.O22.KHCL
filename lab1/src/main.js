import { setPixel } from "./pixel.js";
import { lineDDA } from "./dda.js";
import { lineBresenham } from "./bresenham.js";
import { circleMidpoint } from "./midpoint.js";

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var reset_button = document.getElementById("reset");


var width = 800;
var height = 600;

var bgRgba =  [240, 240, 200, 1]; 
var pointRgba = [0, 0, 255, 255]; 
var lineRgba = [0, 0, 0, 255]; 
var vlineRgba = [255, 0, 0, 255];

var imageData = context.createImageData(width, height);
var points = [];
var optionChoiceDropBox = document.getElementById("algorithm");
var radiusSlider = document.getElementById("radius-slider");
var decreaseButton = document.getElementById("decrease-slider-value-button");
var increaseButton = document.getElementById("increase-slider-value-button");
var optionList = {
    "none": 0,
    "DDA": 1,
    "Bresenham": 2,
    "CircleMidpoint": 3
}
var option = optionList[optionChoiceDropBox.value];

canvas.setAttribute("width", width);
canvas.setAttribute("height", height);
canvas.style.background = bgRgba;

canvas.addEventListener("mousedown", mouseClick, false);
reset_button.addEventListener("click", reset_button_clicked, false);
optionChoiceDropBox.addEventListener("change", value_changed, false);
radiusSlider.addEventListener("input", slider_value_changed, false);
decreaseButton.addEventListener("click", decrease_button_clicked, false);
increaseButton.addEventListener("click", increase_button_clicked, false);


function mouseClick(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    points.push([x, y]);

    setPixel(imageData, x, y, pointRgba);

    actionChoice(option, optionList, imageData, points);

    context.putImageData(imageData, 0, 0);
}

function actionChoice(option, optionList, imageData, points) {
    switch (option) {
        case optionList["DDA"]:
            {
                if (points.length == 2) {
                    lineDDA(imageData, points, lineRgba);
                    points.length = 0;
                }
                break;
            }
        case optionList["Bresenham"]:
            {
                if (points.length == 2) {
                    lineBresenham(imageData, points, lineRgba);
                    points.length = 0;
                }
                break;
            }
        case optionList["CircleMidpoint"]:
            {
                if (points.length == 1) {
                    var xc = points[0][0], yc = points[0][1];
                    var radius = parseInt(document.getElementById("radius-slider").value);
                    circleMidpoint(imageData, xc, yc, radius, lineRgba);
                    points.length = 0;
                }
                break;
            }
    }
}

function value_changed() {
    option = optionList[optionChoiceDropBox.value];
    points.length = 0;
    if (option == 1 || option == 2) {
        let line_guide = document.getElementById("line");
        line_guide.style.display = "block";
        let circle_guide = document.getElementById("circle");
        circle_guide.style.display = "none";
    }
    else if (option == 3) {
        let circle_guide = document.getElementById("circle");
        circle_guide.style.display = "block";
        let line_guide = document.getElementById("line");
        line_guide.style.display = "none";
        let radius_input_container = document.getElementById("radius-input-container");
        radius_input_container.style.display = "block";
    }
    else {
        let line_guide = document.getElementById("line");
        line_guide.style.display = "none";
        let circle_guide = document.getElementById("circle");
        circle_guide.style.display = "none";
        let radius_input_container = document.getElementById("radius-input-container");
        radius_input_container.style.display = "none";
    }
}

function slider_value_changed() {
    let radiusSlider = document.getElementById("radius-slider");
    let radiusValue = document.getElementById("radius-value");
    radiusValue.textContent = radiusSlider.value;
}

function decrease_button_clicked() {
    let radiusSlider = document.getElementById("radius-slider");
    if (parseInt(radiusSlider.value) > parseInt(radiusSlider.min)) {
        radiusSlider.value--;
        slider_value_changed();
    }
}

function increase_button_clicked() {
    let radiusSlider = document.getElementById("radius-slider");
    if (parseInt(radiusSlider.value) < parseInt(radiusSlider.max)) {
        radiusSlider.value++;
        slider_value_changed();
    }
}

function reset_button_clicked() {
    imageData = context.createImageData(width, height);
    context.putImageData(imageData, 0, 0);
}