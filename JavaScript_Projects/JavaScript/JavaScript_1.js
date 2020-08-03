//desert choice
function desert_func(){
    var desert_output;
    var deserts = document.getElementById("desert_choice").value;
    var desert_str = " is a yummy desert!";
    switch (deserts) {
        case "Fruit Pie":
            desert_output = "Fruit Pie" + desert_str;
        break;
        case "Ice Cream":
            desert_output = "Ice Cream" + desert_str;
        break;
        case "Brownies":
            desert_output = "Brownies" + desert_str;
        break;
        case "Cake":
            desert_output = "Cake" + desert_str;
        break;
        case "Cookies":
            desert_output = "Cookies" + desert_str;
        break;
        case "Fudge":
            desert_output = "Fudge" + desert_str;
        break;
        default:
            desert_output = "Please enter a desert exactly as written on the above list.";
}
document.getElementById("output").innerHTML = desert_output;
}

// get element by class
function hello_func(){
    var x = document.getElementsByClassName("click");
    x[1].innerHTML = "You should make your favorite desert.";
}

//canvas
function desert_canvas(){
var c = document.getElementById("desert");
var context = c.getContext("2d");
context.font = "30px sans-serif";
context.strokeText("Treat yo' self", 10, 50);
}

function color_canvas() {
var c = document.getElementById("canvas");
var context = c.getContext("2d");
var grd = context.createLinearGradient(0, 0, 300, 0);
grd.addColorStop(0, "lightgreen");
grd.addColorStop(1, "white");
context.fillStyle = grd;
context.fillRect(0, 0, 200, 200);
}