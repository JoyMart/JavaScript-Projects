// addition
function mathAnswer(){
    var add = 5 + 10;
    document.getElementById("math").innerHTML = add;
}    
    
//subtraction
function subAnswer(){
    var sub = 210 - 87;
    document.getElementById("math2").innerHTML= sub;
}

//multiplication
function mulAnswer(){
    var multiply = 10 * 5;
    document.getElementById("math3").innerHTML= multiply;
}

//division
function divAnswer(){
    var divide = 210 / 87;
    document.getElementById("math4").innerHTML= divide;
}

// multiple operations at once
function complicatedAnswer(){
    var comp = (5 + 10) * 210 / 87 - 123;
    document.getElementById("math5").innerHTML= comp;
}

// remainder answer
function remainderAnswer(){
    var remain = 10%3;
    document.getElementById("math6").innerHTML= remain;
}

//negation operator
function negationOperator(){
    var X = 70;
    document.getElementById("math7").innerHTML= -X;
}

//increase
var Y = 1;
function buttonClick() {
    document.getElementById("increase").value = Y++;
}
    

//decrease
var Z = 10;
function clickButton() {
    document.getElementById("decrease").value = Z--;
}

//random number on load
window.alert(Math.random()*25);

//Math object, Pi
function pi(){
    var A = Math.PI;
    document.getElementById("pi").innerHTML = A;
}