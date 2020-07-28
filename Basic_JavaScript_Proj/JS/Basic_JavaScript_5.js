document.write(typeof "three");
document.write("<br><br>");

document.write(2E310);
document.write("<br><br>");

document.write(-3E310);
document.write("<br><br>");

document.write(7>10)
document.write("<br><br>");

document.write(7<10)
document.write("<br><br>");

console.log(2*2);
document.write("<br><br>");

document.write(7 + "Eleven");
document.write("<br><br>");

console.log(2>9);
document.write("<br><br>");

document.write(18 == (7+11));
document.write("<br><br>");

document.write(8==(4+8));
document.write("<br><br>");

var A = 10;
var B = 10;
var C = "10";
var D = "ten";
var E = 9;
document.write(A === B);
document.write(C === A);
document.write(C === B);
document.write(A === E);
document.write("<br><br>");

document.write(5>1 && 7>5);
document.write("<br>");
document.write(5>1 && 7>9);
document.write("<br><br>");
document.write(5>1 || 7>9);
document.write("<br>");
document.write(5<1 || 7<5);
document.write("<br><br>");


function yeet() {
    document.getElementById("test").innerHTML =0/0
}

function yeet1() {
    document.getElementById('test1').innerHTML = isNaN('hello');
}

function  yeet2() {
    document.getElementById('test2').innerHTML = isNaN('10');
}

function not_func() {
    document.getElementById("Not").innerHTML = !(7 > 9);
}

function not_func2() {
    document.getElementById("Not2").innerHTML = !(7 < 9);
}
