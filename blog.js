function validate_form() {
    var x = document.forms["feed"]["name"].value;
    if (x == null || x == "") {
        alert("sorry! Name must be filled out.");
        return false;
    }
    var y = document.forms["feed"]["email"].value;
    var atpos = y.indexOf("@");
    var dotpos = y.lastIndexOf(".");
    if (atpos < 1 || dotpos <= (atpos + 5) || dotpos >= (y.length - 2)) {
        alert("Invalid e-mail address!");
        return false;
    }
    var z = document.forms["feed"]["number"].value;
    if (z == null || z.length != 10) {
        alert("Invalid contact number! Length should be 10.");
        return false;
    }
    if(isNaN(z)||z.indexOf(" ")!=-1){
        alert("Number can't be Alpha-Numeric!")
        return false;
    }
    var w =document.forms["feed"]["code"].value;
    if(isNaN(w)||w.indexOf(" ")!=-1){
        alert("Code must be numeric!")
        return false;
    }
}
