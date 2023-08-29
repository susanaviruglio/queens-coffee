/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



/*Memory game stars here*/

/*query selector all*/

const games = document.querySelectorAll('.square');
/* for each method to select all in an array*/
games.forEach(game => game.addEventListener('click', memoryGame));
/*match cards using comparison*/
function memoryGame() {
  this.classList.add('flip');
  if(!flips) {
    flips = false;
    cardOne = this;
  }
}


let cardOne, cardTwo;
let flips = true;