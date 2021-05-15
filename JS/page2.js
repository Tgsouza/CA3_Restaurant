/*--SEE MORE BUTTON FUNCTION ON THE CARDS--
-Use getElementByID to find the button
-Change the display style on CSS
*/
function btnFuntion() {
    var moreText = document.getElementById("seeMore");
  
    if (seeMore.style.display == "none") {
      moreText.style.display = "inline";
    } else {
      moreText.style.display = "none";
    }
}

/*--ADDING MOVEMENT TO THE CARDS*/

const card = document.querySelector(".card");
const container = document.querySelector(".container");

/*--Moving Animation event--
-Use addEventListener to get the position(e = element) of the cursor when we hover the mouse on the card
-Store the X axis(X position) related to the window Width
-Store the Y axis(Yposition) related to the window Height
-Change the transform style of the ".card" div to follow the cursor
*/
container.addEventListener('mouseover', (e) =>{
    
    let xAxis = (window.innerWidth / 2 - e.pageX) /15;
    let yAxis = (window.innerHeight / 2 - e.pageY)/15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});


container.addEventListener('mouseleave', (e) =>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
