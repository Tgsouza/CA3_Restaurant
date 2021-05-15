//Creates a Array for the items from the Menu//
var menu = [
    //STARTERS//
    {
        name: "Chicken Wings",
        description: "Delicious Chicken Wings with bbq sauce",
        class: "non-veg",
        price: 7,
        course: "Starter",
        id: "itm_0",
        img: "../img/page2_animation/Starters/Wings.jpg"

    },
    {
        name: "Mini Avocado Toast (v)",
        description: "Toast with mashed avocado, black pepper, and citrus juice.",
        class: "vegetarian",
        price: 6,
        course: "Starter",
        id: "itm_1"
    },
    {
        name: "Beans n' Greens (v)",
        description: "Canelli beans and Escarole with garlic gloves, peppers and parmesan cheese",
        class: "vegetarian",
        price: 6,
        course: "Starter",
        id: "itm_2"
    },
    //MAIN COURSE//
    {
        name: "Chicken Burger",
        description: "Chicken breasts marinated in brown sauce, honey, garlic and chilli sauce with bacon, salad and red onion",
        class: "non-veg",
        price: 16,
        course: "Main",
        id: "itm_3"

    },
    {
        name: "Dhl Curry (v)",
        description: "Lentils, Curry leaves and Dal Spices with Naan Bread",
        class: "vegetarian",
        price: 14,
        course: "Main",
        id: "itm_4"

    },
    {
        name: "Eggs Benedict(v)",
        description: "English muffin, poached egg, hollandaise sauce and greens",
        class: "vegetarian",
        price: 14,
        course: "Main",
        id: "itm_5"

    },
    //DESSERTS//
    {
        name: "Nutella Waffles",
        description: "Waffles, topped with nutella strawberry and cream",
        price: 7,
        course: "Dessert",
        id: "itm_6"

    },
    {
        name: "Chocolate Brownie",
        description: "Chocolate brownie topped with icecream and melted chocolate",
        price: 7,
        course: "Dessert",
        id: "itm_7"

    },
    {
        name: "Mini Doughnuts",
        description: "On top of melted chocolate and mini marshmallows",
        price: 6,
        course: "Dessert",
        id: "itm_8"

    },
    //DRINKS//
    {
        name: "House Lager",
        description: "Ask the staff",
        price: 5,
        course: "Drink",
        id: "itm_9"

    },
    {
        name: "Soda",
        description: "Select from Coke, 7up or Fanta",
        price: 2,
        course: "Drink",
        id: "itm_10"

    },
    {
        name: "Fresh Juice",
        description: "Orange, Pinapple or Lemonade",
        price: 3,
        course: "Drink",
        id: "itm_11"

    }
];

//Call buildstarters function using menu as parameters
buildStarters(menu);
/*---JQUERY TO BUILD STARTER MENU---
-Creates a function to build a table with the starters using the (data) from the array
-Creates a for loop to run from index 0 and 2 (<3) read the information and create a table using `` that allows us to write in more than one line withouth need to concatenate 
-For each loop will create one table roll with 4 data cells(td) containing the name, description, price and input to get the quantity of items
*/
function buildStarters(data) {
    var table = document.getElementById('starters')

    for (var i = 0; i < 3; i++) {

        var row = ` <tr class="name container">
                            <td>${data[i].name}</td>
                            <td>${data[i].description}</td>
                            <td>£ ${data[i].price}</td>
                            <td><input type="text" class="${data[i].class}" id="${data[i].id}" size="3" name="quantity" value="0" data-price="${data[i].price}"/></td>
                        </tr>
            `

        table.innerHTML += row

    }
}

/*---FUNCTION TO CALCULATE THE VALUE OF STARTERS---
-Creates a function to read the items inside the parameters of the loop to get the price everytime is executed
-Uses for loop to go through 3 items (in this case from index 0 to 2 (<3)) 
-Stores the Item inside the var ItemID
-Calculate the total value of the item * quantity everytime is executed
-Sends the total value to the <td>'s it belongs, in this case TotalValue(Total Bill) and StrTotal (Starters)

Used for the nexts similar functions, changing only the parameters and values.
*/
function CalculateStarters() {
    var total = 0;
    for (let i = 0; i < 3; i++) {
        itemID = document.getElementById("itm_" + i);
        total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    }

    document.getElementById('TotalValue').innerHTML = "£ " + total;
    document.getElementById('StrTotal').innerHTML = "£ " + total;

}

/*--JQUERY SELECTOR TO EXECUTE THE FUNCTION CALCULATING AFTER KEYUP--
-QuerySelectorAll used to find any id starting with the value
-For each time starts a EventListener, if we press a key to define a value, once the key is up again calls the function
*/
document.querySelectorAll('[id^="itm_"]').forEach(item => {
    item.addEventListener('keyup', CalculateStarters);

});


//---JQUERY TO BUILD MAIN MENU---//
buildMains(menu);

function buildMains(data) {
    var table = document.getElementById('mains')

    for (var i = 3; i < 6; i++) {

        var row = ` <tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].description}</td>
                            <td>£ ${data[i].price}</td>
                            <td><input type="text" class="qty" id=${data[i].id} size="3" name="quantity" value="0" data-price="${data[i].price}" /></td>
                        </tr>
            `

        table.innerHTML += row

    }
}

//---FUNCTION TO CALCULATE THE VALUE OF MAIN---//
function CalculateMains() {
    var total = 0;

    for (let i = 3; i < 6; i++) {
        itemID = document.getElementById("itm_" + i);
        total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    }

    document.getElementById('MainTotal').innerHTML = "£ " + total;
    document.getElementById('TotalValue').innerHTML = "£ " + total;


}
document.querySelectorAll('[id^="itm_"]').forEach(item => {
    item.addEventListener('keyup', CalculateMains);

});

//---JQUERY TO BUILD DESSERT MENU---//
buildDess(menu);

function buildDess(data) {
    var table = document.getElementById('desserts')

    for (var i = 6; i < 9; i++) {

        var row = ` <tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].description}</td>
                            <td>£ ${data[i].price}</td>
                            <td><input type="text" class="qty" id=${data[i].id} size="3" name="quantity" value="0" data-price="${data[i].price}" /></td>

                        </tr>
            `

        table.innerHTML += row

    }
}

//---FUNCTION TO CALCULATE THE VALUE OF DESSERTS---//
function CalculateDess() {
    var total = 0;

    for (let i = 6; i < 9; i++) {
        itemID = document.getElementById("itm_" + i);
        total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    }

    document.getElementById('DesTotal').innerHTML = "£ " + total;
    document.getElementById('TotalValue').innerHTML = "£ " + total;

}
document.querySelectorAll('[id^="itm_"]').forEach(item => {
    item.addEventListener('keyup', CalculateDess);

});

//---JQUERY TO BUILD DRINKS MENU---//
buildDrkMenu(menu);

function buildDrkMenu(data) {
    var table = document.getElementById('drinks')

    for (var i = 9; i <= 11; i++) {

        var row = ` <tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].description}</td>
                            <td>£ ${data[i].price}</td>
                            <td><input type="text" class="qty" id=${data[i].id} size="3" name="quantity" value="0" data-price="${data[i].price}" /></td>

                        </tr>
            `

        table.innerHTML += row

    }
}

//---FUNCTION TO CALCULATE THE VALUE OF DRINKS---//
function CalculateDrk() {
    var total = 0;

    for (let i = 9; i <= 11; i++) {
        itemID = document.getElementById("itm_" + i);
        total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    }

    document.getElementById('DrkTotal').innerHTML = "£ " + total;
    document.getElementById('TotalValue').innerHTML = "£ " + total;


}
document.querySelectorAll('[id^="itm_"]').forEach(item => {
    item.addEventListener('keyup', CalculateDrk);

});

//---FUNCTION TO CALCULATE THE TOTAL VALUE OF THE BILL---//
function CalculateTotal() {
    var total = 0;
    for (let i = 0; i <= 11; i++) {
        itemID = document.getElementById("itm_" + i);
        total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    }

    document.getElementById('TotalValue').innerHTML = "£ " + total;

}
document.querySelectorAll('[id^="itm_"]').forEach(item => {
    item.addEventListener('keyup', CalculateTotal);

});

//---FUNCTION TO CALCULATE THE TOTAL VALUE OF VEGETARIAN COURSES---//
function CalculateVeg() {
    var total = 0;
    for (let i = 0; i <= 11; i++) {
        itemID = document.getElementById("itm_" + i);
        total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    }

    document.getElementById('VegTotal').innerHTML = "£ " + total;
}
//--JQUERY SELECTOR, USING (".CLASS"), TO EXECUTE THE FUNCTION CALCULATING AFTER KEYUP--//
document.querySelectorAll('.vegetarian').forEach(item => {
    item.addEventListener('keyup', CalculateVeg)

});

//---FUNCTION TO CALCULATE THE TOTAL VALUE OF NON VEGETARIAN COURSES---//
function CalculateNonVeg() {
    var total = 0;
    for (let i = 0; i <= 11; i++) {
        itemID = document.getElementById("itm_" + i);
        total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

    }

    document.getElementById('NonVegTotal').innerHTML = "£ " + total;
}
//--JQUERY SELECTOR, USING (".CLASS"), TO EXECUTE THE FUNCTION CALCULATING AFTER KEYUP--//
document.querySelectorAll('.non-veg').forEach(item => {
    item.addEventListener('keyup', CalculateNonVeg)

});







