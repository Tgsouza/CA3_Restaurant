function verifyPass(){
    alert("works!");
    
    //Getting input from the user
    var pass = document.getElementById("pswd").value;

    /*Variable with the RegEx containing the rules to a valid password    
    (?=.*[a-z]) - Must contain at least one lowercase char
    (?=.*[A-Z]) - Must contain at least one uppercase char
    (?=.*[0-9]) - Must contain one number from
    (?=.*[!@#$%^&*]) - Must contain one special char
    (?=.{8,}) - Must have at least 8 char*/
    var passRules = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"); 

    //VALIDATION//
    if(pass ==""){
        document.getElementById("message").innerHTML="Fill the password to proceed!";
        return false;

    }
    if(pass != passRules){
        document.getElementById("message").innerHTML="The password must contain at least 8 digits!";
        return false;
    }

}