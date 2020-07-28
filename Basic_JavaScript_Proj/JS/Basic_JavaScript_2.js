// button that when clicked says "This text is pink", in the color pink
function colors() {
    var str = "This text is pink";
    var result = str.fontcolor("pink");
    document.getElementById("pink_Text").innerHTML = result;
}
document.body.style.backgroundColor = "lightblue";

document.write("<br><br>")// adding space

// function that, when clicked, text changes to display a quote
function StarWars() {
    var quote = "Why, hello there";
    quote += "!";
    document.getElementById("hello_there").innerHTML = quote;
}

document.write("<br><br>");//adding space

//created an adding function
function add(x, y) {
    return x + y;
}
document.write("<br><br>"); //adding space

//execute id function
function box() {
    document.getElementById("smile").style.border = "thin double #ffffff";
}

