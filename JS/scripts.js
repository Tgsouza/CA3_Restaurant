//PASSWORD CHECK//
function verifyPass() {

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
    if (pass == "") {

        document.getElementById("message").innerHTML = "Fill the password to proceed!";
        return false;

    } else if (pass.match(/[a-z]/g) && pass.match(/[A-Z]/g) && pass.match(/[!@#$%^&*]/g) && pass.match(/[0-9]/g) && pass.match(/[^a-zA-Z\d]/g) && pass.length >= 8) {

        document.getElementById("message").innerHTML = "Valid Password";
        document.getElementById("message").style.color = "Green";
        return false;

    } else {

        document.getElementById("message").innerHTML = "Invalid ! Check the password validations!";
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
myInput.onfocus = function () {

    document.getElementById("passValidation").style.display = "block";

}

//Hide the validation box//
myInput.onblur = function () {

    document.getElementById("passValidation").style.display = "none";

}

//Check the password strength when user starts to type//

myInput.onkeyup = function () {

    var lowerCheck = /[a-z]/g;
    if (myInput.value.match(lowerCheck)) {
        lowerCase.classList.remove("invalid");
        lowerCase.classList.add("valid");

    } else {
        lowerCase.classList.remove("valid");
        lowerCase.classList.add("invalid");
    }

    var upperCheck = /[A-Z]/g;
    if (myInput.value.match(upperCheck)) {
        upperCase.classList.remove("invalid");
        upperCase.classList.add("valid");
    } else {
        upperCase.classList.remove("valid");
        upperCase.classList.add("invalid");
    }

    var numCheck = /[0-9]/g;
    if (myInput.value.match(numCheck)) {
        hasNum.classList.remove("invalid");
        hasNum.classList.add("valid");
    } else {
        hasNum.classList.remove("valid");
        hasNum.classList.add("invalid");
    }

    var specCheck = /[!@#$%^&*]/g;
    if (myInput.value.match(specCheck)) {
        specChar.classList.remove("invalid");
        specChar.classList.add("valid");
    } else {
        specChar.classList.remove("valid");
        specChar.classList.add("invalid");
    }

    if (myInput.value.length >= 8) {
        minChar.classList.remove("invalid");
        minChar.classList.add("valid");
    } else {
        minChar.classList.remove("valid");
        minChar.classList.add("invalid");
    }

    //USER GENERATOR//

    //add the function to the customer generator button
    document.getElementById('customer_button').addEventListener('click', getRandom);

    //Function to get a random customer using a JSON API
    function getRandom() {
        // change the adress
        fetch('https://randomuser.me/api/?results=5')
            .then((res) => res.json())
            .then((data) => {
                let author = data.results;
                let output = '<h2>Customers</h2>'
                console.log(data);
                author.forEach(function (user) {
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

                document.getElementById('customer_output').innerHTML = output;

            })
    }

}
//FOOD MENU CALCULATOR//

var total_items = 12;
//Creates a function to calculate the value of the items//
/*function CalculateItemsValue(){

    var total =0;

    //Creates a loop that will loop throught the items and change the total value using the attribute "data-price" from the inputs
    for(let i = 1; i <= total_items; i++){

        itemID = document.getElementById("qnt_" + i);
        total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    }
    document.getElementById('ItemsTotal').innerHTML = "£ " + total;

}

//Function to select all items with the ID starting with "qnt_". For each of the itens use the keyup eventlistener to call the function CalculateItemsValue
document.querySelectorAll('[id^="qnt_"]').forEach(item =>{
        item.addEventListener('keyup', CalculateItemsValue);
    });


var total_value = 0;
var total_starters = 3;

function CalculateStarters(){
    var total=0;

    for (let i = 1; i<= total_starters; i++){
        itemID = document.getElementById("str_" + i);
        total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    }

    if(total != 0){
            total_value += total;
    }else{
        document.getElementById("StrTotal").dataset;

    }
    document.getElementById('StrTotal').innerHTML = "£ " + total;
}
document.querySelectorAll('[id^="str_"]').forEach(item =>{
    item.addEventListener('keyup', CalculateStarters);

});

var total_mains = 3;

function CalculateMain(){

    var total=0;

    for (let i = 1; i<= total_mains; i++){
        itemID = document.getElementById("main_" + i);
        total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    }

    if(total != 0){
        total_value += total;
    }else{
        document.getElementById("MainTotal").dataset;
    }
    document.getElementById('MainTotal').innerHTML = "£ " + total;

}
document.querySelectorAll('[id^="main_"]').forEach(item =>{
    item.addEventListener('keyup', CalculateMain);

});

var total_des = 3;

function CalculateDes(){

    var total=0;

    for (let i = 1; i<= total_mains; i++){
        itemID = document.getElementById("des_" + i);
        total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
    }

    if(total != 0){
        total_value += total;
    }else{
        document.getElementById("DesTotal").dataset;
    }
    document.getElementById('DesTotal').innerHTML = "£ " + total;



}
document.querySelectorAll('[id^="des_"]').forEach(item =>{
    item.addEventListener('keyup', CalculateDes);

});

var total_drk = 3;

function CalculateDrk(){

    var total=0;

    for (let i = 1; i<= total_drk; i++){
        itemID = document.getElementById("drk_" + i);
        total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
    }

    if(total != 0){
        total_value += total;
    }else{
        document.getElementById("DrkTotal").dataset;
    }
    document.getElementById('DrkTotal').innerHTML = "£ " + total;


}
document.querySelectorAll('[id^="drk_"]').forEach(item =>{
    item.addEventListener('keyup', CalculateDrk);

});

function Total_calculator(){

    document.getElementById("ItemsTotal").innerHTML = total_value;

}
function Total_reset(){

    total_value = 0;
    document.getElementById("ItemsTotal").innerHTML = total_value;

}

function filterMenu(menu){

    const menuNode = document.querySelector('#starters');
    const starterOptions = menu.filter(
        (option) => option.course == "Starter"

    );

    starterOptions.forEach((option) =>{
        let dish = document.createElement("tr");
        dish.textContent = option.name + " £ " + option.price;
        menuNode.appendChild(dish);
    });

}*/





