function my_dictionary() {
    var animal = {
        species: "Dog",
        color: "Tricolor",
        breed: "Huskrador",
        age: 2,
        name: "Paxton",
        sound: "Bark, bark!"
    };
    document.getElementById("dictionary1").innerHTML = animal.sound;
}
function my_dictionary1() {
    var animal = {
        species: "Dog",
        color: "Tricolor",
        breed: "Huskrador",
        age: 2,
        name: "Paxton",
        sound: "Bark, bark!"
    };
    delete animal.sound;
    document.getElementById("dictionary1.1").innerHTML = animal.sound;
}