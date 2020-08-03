function validateForm() {
    var x = document.forms['myForm']['fname'].value;
    if (x == ""){
        alert("First name must be filled out");
        return false;
    }
    var y = document.forms['myForm']['lname'].value;
    if (y == ""){
        alert("Last name must be filled out");
        return false;
    }
    var z = document.forms['myForm']['email'].value;
    if (z ==""){
        alert("Email must be filled out");
        return false;
    }
}