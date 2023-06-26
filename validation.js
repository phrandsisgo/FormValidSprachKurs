function formSubmitFunc(){
    alert("Thank you for your submission!");
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if(name == ""){
        document.getElementById("nameError").innerHTML = "Please enter your name";
        return false;
    }
    if(email == ""){
        document.getElementById("emailError").innerHTML = "Please enter your email";
        return false;
    }
    if(phone == ""){
        document.getElementById("phoneError").innerHTML = "Please enter your phone number";
        return false;
    }
    if(phone.length != 10){
        document.getElementById("phoneError").innerHTML = "Please enter a valid phone number";
        return false;
    }
    if(isNaN(phone)){
        document.getElementById("phoneError").innerHTML = "Please enter a valid phone number";
        return false;
    }
    return true;
}