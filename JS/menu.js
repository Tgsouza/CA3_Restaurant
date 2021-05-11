    //STARTERS//

var starterMenu =[
    {
        name: "Chicken Wings",
        description: "Delicious Chicken Wings with bbq sauce",
        isVegetarian:false,
        price: 7,
        course:"Starter"

    },
    {
        name: "Mini Avocado Toast (v)",
        description: "Toast with mashed avocado, black pepper, and citrus juice.",
        isVegetarian: true,
        price: 6,
        course:"Starter"
    },
    {
        name: "Beans n' Greens (v)",
        description: "Canelli beans and Escarole with garlic gloves, peppers and parmesan cheese",
        isVegetarian:true,
        price: 6,
        course:"Starter"
    }];

    buildStarters(starterMenu);

function buildStarters(data){
        var table = document.getElementById('starters')
    
        for(var i = 0; i < starterMenu.length; i++){
    
            var row = ` <tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].description}</td>
                            <td>${data[i].price}</td>
                            <td><input type="text" class="qty" id=("dessQt_ + i") size="3" name="quantity" value="0" data-price="${data[i].price}" /></td>
                        </tr>
            `
            
            table.innerHTML += row
            
        }
    }    

    //MAINS//
    var mainsMenu = [
    {
        name:"Chicken Burger",
        description: "Chicken breasts marinated in brown sauce, honey, garlic and chilli sauce with bacon, salad and red onion",
        isVegetarian: false,
        price: 16,
        course:"Main"

    },
    {
        name: "Dhl Curry (v)",
        description: "Lentils, Curry leaves and Dal Spices with Naan Bread",
        isVegetarian: true,
        price: 14,
        course:"Main"

    },
    {
        name: "Eggs Benedict(v)",
        description: "English muffin, poached egg, hollandaise sauce and greens",
        isVegetarian: true,
        price: 14,
        course:"Main"

    }];

    buildMains(mainsMenu);

function buildMains(data){
        var table = document.getElementById('mains')
    
        for(var i = 0; i < starterMenu.length; i++){
    
            var row = ` <tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].description}</td>
                            <td>${data[i].price}</td>
                            <td><input type="text" class="qty" id="dessQt" size="3" name="quantity"/></td>
                        </tr>
            `
            
            table.innerHTML += row
            
        }
    }    
    
    //DESSERTS//
    var dessMenu =[
    {
        name: "Nutella Waffles",
        description: "Waffles, topped with nutella strawberry and cream",
        isVegetarian: true,
        price: 7,
        course:"Dessert"

    },
    {
        name: "Chocolate Brownie",
        description: "Chocolate brownie topped with icecream and melted chocolate",
        isVegetarian: true,
        price: 7,
        course:"Dessert"

    },
    {
        name: "Mini Doughnuts",
        description: "On top of melted chocolate and mini marshmallows",
        isVegetarian: true,
        price: 6,
        course:"Dessert"

    }];

    buildDess(dessMenu);

function buildDess(data){
        var table = document.getElementById('desserts')
    
        for(var i = 0; i < starterMenu.length; i++){
    
            var row = ` <tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].description}</td>
                            <td>${data[i].price}</td>
                            <td><input type="text" class="qty" id="dessQt" size="3" name="quantity"/></td>

                        </tr>
            `
            
            table.innerHTML += row
            
        }
    }

    //DRINKS//

    var drkMenu = [
    {
        name: "House Lager",
        description: "Ask the staff",
        isVegetarian: true,
        price: 5,
        course:"Drink"

    },
    {
        name: "Soda",
        description: "Select from Coke, 7up or Fanta",
        isVegetarian: true,
        price:2,
        course:"Drink"

    },
    {
        name:"Fresh Juice",
        description: "Orange, Pinapple or Lemonade",
        isVegetarian: true,
        price: 3,
        course:"Drink"

    }];

    buildDrkMenu(drkMenu);

function buildDrkMenu(data){
        var table = document.getElementById('drinks')
    
        for(var i = 0; i < starterMenu.length; i++){
    
            var row = ` <tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].description}</td>
                            <td>${data[i].price}</td>
                            <td><input type="text" class="qty" id="dessQt" size="3" name="quantity"/></td>

                        </tr>
            `
            
            table.innerHTML += row
            
        }
    }
    
    
