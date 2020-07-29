function make_sentence() {
    var A = "Love you to the Moon and to Saturn // ";
    var B = " Passed down like folk songs //";
    var C = " The love lasts so long. ";
    var D = " - Taylor Swift, seven, folklore 2020";
    var quote = A.concat(B, C, D);
    document.getElementById("TSquote").innerHTML = quote;
}

// slice func
function slice_func(){
    var Sentence = " - Taylor Swift, seven, folklore 2020";
    var Section =Sentence.slice(3, 15);
    document.getElementById("slice").innerHTML = Section;
}

//upper case
function caseup(){
    var str = "folklore is a new album by Taylor Swift";
    var res = str.toUpperCase();
    document.getElementById("upper").innerHTML = res;
}

//search() func
function look(){
    var str = "folklore is a new album by Taylor Swift";
    var n = str.search("Taylor Swift");
    document.getElementById("position").innerHTML = n;
}

//num to string
function string_func(){
    var x = 1989;
    document.getElementById('num_to_string').innerHTML = x.toString();
}

//precision
function precision_func(){
    var y = 12345.6789012345;
    document.getElementById("Precision").innerHTML = y.toPrecision(7);
}

//fixed 
function fixed_func(){
    var z = 12345.6789012345;
    var a = z.toFixed(2);
    document.getElementById("fix").innerHTML = a;
}

//value
function value_func(){
    var str = "Taylor Swift"
    var res = str.valueOf();
    document.getElementById("demo").innerHTML = res;
}