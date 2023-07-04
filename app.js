function validacia() {
    var saxeli = document.getElementById("name");
    var elposta = document.getElementById("email");
    var paroli = document.getElementById("password");
    if (saxeli.value == "") {
        saxeli.style.border = "3px solid red";
        document.getElementById("name_error").innerHTML = "Enter a name";
    } else {
        saxeli.style.border = "3px solid green";
        document.getElementById("name_error").innerHTML = "";
    }
    if (elposta.value == "") {
        elposta.style.border = "3px solid red";
        document.getElementById("email_error").innerHTML = "Enter an Email";
    } else {
        elposta.style.border = "3px solid green";
        document.getElementById("email_error").innerHTML = "";
    }
    if (paroli.value == "") {
        paroli.style.border = "3px solid red";
        document.getElementById("password_error").innerHTML = "Enter a Password";
    } else {
        paroli.style.border = "3px solid green";
        document.getElementById("password_error").innerHTML = "";
    }
    return false;
}
