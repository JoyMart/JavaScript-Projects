function Call_Loop(){
    var sec = "";
    var x = 1;
    while (x < 16){
        sec += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = sec;
}

//string length
function stringlength(){
    var str = "counting is fun";
    var y = str.length;
    document.getElementById("number").innerHTML=y;
}

//for loop
var instruments = ["guitar", "piano", "viola", "flute", "drums", "trumpet", "keyboard"];
var content = "";
var y;
function for_loop(){
    for (y =0; y<instruments.length; y++) {
        content += instruments[y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML= content;
}

//array
function array_Function() {
    var Types_of_teas = [];
    Types_of_teas[0] = "oolong";
    Types_of_teas[1] = "green";
    Types_of_teas[2] = "black";
    Types_of_teas[3] = "white";
    Types_of_teas[4] = "herbal";
    document.getElementById("Array").innerHTML = "There are losts of teas in the world. " +
    "My favorites include: " + Types_of_teas[0, 1] + " and " + Types_of_teas[4] + ".";
}

//constant
var fruit = {
    type: "apple", 
    flavor: "sweet", 
    color: "pink", 
    size: "baseball",
    texture: "mealy"
};

function constant_function() {
    document.getElementById('Constant').innerHTML = "There are many types of fruit."
    + "<br>" + "A common fruit is an " + fruit.type + ", these come in different colors."
    + "<br>" + "The most common color is " + fruit.color +". The worst part about " +
    fruit.type + "s is their texture which is " + fruit.texture +".";
}

//let keyword
var b = 10
function nums() {
    document.getElementById("let1").innerHTML = (b);
    {
        let b = 7
        document.getElementById("let2").innerHTML = (b);
    }
    document.getElementById("let3").innerHTML = (b+b);
}


function clothes(){
    let clothes = {
        size: "2" ,
        color: "maroon",
        type: "pants", 
        action: "wear",
        description: function cloth_func() {
        return this.color + " " + this.type}
        };
    document.getElementById("clothes_Object").innerHTML = "Today I am wearing "+clothes.description() + ".";
}