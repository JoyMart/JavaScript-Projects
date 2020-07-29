var X = 23;
function age1(){
    var Y= 24;
    document.write(Y+X);
}
function age2(){
    var Y= 24;
    document.write(10+Y);
}


// date function
function timing(){
    if (new Date().getHours() < 20){
        document.getElementById("today").innerHTML = "How was your day?";
    }
}

//calorie calculator
function cal_function(){
    Cal = document.getElementById("calorie_intake").value;
    if (Cal >= 1700){
        meal = "You have consumed enough calories for the day.";
    }
    else {
        meal = "You can eat more calories today, but keep track!";
    }
    document.getElementById("number_of_cal").innerHTML = meal;
}

//get time of day
function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time > 18){
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}