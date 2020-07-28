function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short ":"You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

function VotingAge() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young " : "You are old enough ";
    document.getElementById("Vote").innerHTML = Can_Vote + "to vote!";
}

// cars
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " +Erik.Vehicle_Color +"-colored " +Erik.Vehicle_Model +
    " manufactured in " +Erik.Vehicle_Year;
}
// furniture
function Furniture(name, material, purpose) {
    this.Furniture_name = name;
    this.Furniture_material = material;
    this.Furniture_purpose = purpose;
}
var Dresser = new Furniture("Dresser", "oak", "store clothing");
var Desk = new Furniture("desk", "stainless steel", "work surface");
function furniture_func(){
    document.getElementById("New_and_This").innerHTML = 
    "I got a new dresser made of " + Dresser.Furniture_material + 
    " and I will use it to " + Dresser.Furniture_purpose + ".";
}    
function furniture_func2(){   
    document.getElementById("New_and_This2").innerHTML = 
    "I also got a new " + Desk.Furniture_name + ". It is made of wood and "
    + Desk.Furniture_material +". I will use it as a " + Desk.Furniture_purpose
    + "for my programming school.";
}

//nested function
function counting(){
    document.getElementById("Nested_Function").innerHTML = Count ();
    function Count () {
        var start_pnt = 1;
        function add_one() {
            start_pnt +=1;
        }
        add_one();
        return start_pnt;
    }
}