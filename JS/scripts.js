//PASSWORD CHECK//
function verifyPass(){
     
//Getting input from the user
    var pass = document.getElementById("pswd").value;

/*Variable with the RegEx containing the rules to a valid password    
(?=.*[a-z]) - Must contain at least one lowercase char
(?=.*[A-Z]) - Must contain at least one uppercase char
(?=.*[0-9]) - Must contain one number from
(?=.*[!@#$%^&*]) - Must contain one special char
(?=.{8,}) - Must have at least 8 char*/
    var passRules = /"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"/;
    
//PASS VALIDATION//
    if(pass ==""){
    
        document.getElementById("message").innerHTML="Fill the password to proceed!";
        return false;

    }else if (pass.match(/[a-z]/g) && pass.match(/[A-Z]/g) && pass.match(/[!@#$%^&*]/g)&& pass.match(/[0-9]/g) && pass.match(/[^a-zA-Z\d]/g) && pass.length >= 8){

        document.getElementById("message").innerHTML="Valid Password";
        document.getElementById("message").style.color = "Green";
        return false;

    }else{

        document.getElementById("message").innerHTML="Invalid ! Check the password validations!";
        document.getElementById("message").style.color = "Red";
        return false;

    }

}

//STRONG VALIDATION BOX//
var myInput = document.getElementById("pswd");
var lowerCase = document.getElementById("lowerCase");
var upperCase = document.getElementById("upperCase");
var specChar = document.getElementById("specChar");
var hasNum = document.getElementById("hasNum");
var minChar = document.getElementById("minChar");

//Show Validation box//
myInput.onfocus = function(){

    document.getElementById("passValidation").style.display="block";

}

//Hide the validation box//
myInput.onblur = function(){

    document.getElementById("passValidation").style.display="none";

}

//Check the password strength when user starts to type//

myInput.onkeyup = function(){

    var lowerCheck = /[a-z]/g;
    if(myInput.value.match(lowerCheck)){
        lowerCase.classList.remove("invalid");
        lowerCase.classList.add("valid");

    }else{
        lowerCase.classList.remove("valid");
        lowerCase.classList.add("invalid");
    }

    var upperCheck = /[A-Z]/g;
    if(myInput.value.match(upperCheck)){
        upperCase.classList.remove("invalid");
        upperCase.classList.add("valid");
    }else{
        upperCase.classList.remove("valid");
        upperCase.classList.add("invalid");
    }

    var numCheck = /[0-9]/g;
    if(myInput.value.match(numCheck)){
        hasNum.classList.remove("invalid");
        hasNum.classList.add("valid");
    }else{
        hasNum.classList.remove("valid");
        hasNum.classList.add("invalid");
    }

    var specCheck = /[!@#$%^&*]/g;
    if(myInput.value.match(specCheck)){
        specChar.classList.remove("invalid");
        specChar.classList.add("valid");
    }else{
        specChar.classList.remove("valid");
        specChar.classList.add("invalid");
    }

    if(myInput.value.length >= 8){
        minChar.classList.remove("invalid");
        minChar.classList.add("valid");
    }else{
        minChar.classList.remove("valid");
        minChar.classList.add("invalid");
    }

    //USER GENERATOR//

    //add the function to the customer generator button
    document.getElementById('customer_button').addEventListener('click', getRandom);

    //Function to get a random customer using a JSON API
    function getRandom(){
        // change the adress
        fetch('https://randomuser.me/api/?results=1')
        .then((res) => res.json())
        .then((data) => {
            let author = data.results;
            let output = '<h2>Users</h2>'
            console.log(data);
            author.forEach(function(user){
                output += `
                <div class="each_customer">
                    <th>NAME:${user.name.first} ${user.name.last}</th><br>
                    <tr><img src=" ${user.picture.large}"></tr><br>
                    <tr>Cellphone: ${user.cell}</tr><br>
                    <tr>Date of birth: ${user.registered.date}</tr><br>
                    <tr>Age: ${user.registered.age}</tr><br>
                    <tr>Email: ${user.email}</tr><br>
                    <tr>Location: ${user.location.city}</tr><br>
                    
                    
                </div>
                `;
            });

            document.getElementById('output').innerHTML = output;   

        })
    }
}
