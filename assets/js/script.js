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







/*
function memoryGame() {
    let clicks = document.getElementsByClassName('square');
    for (let click of clicks) {
        click.addEventListener('click', memoryGame) {
            if (this!== cardOne) {
                let backs = document.getElementsByClassName('card');
                for(let back of backs){
                    this.classList.add('flip');
                }
            }
        }
    }
}*/

/*query selector all*/
const games = document.querySelectorAll('.square');
/* for each method to select all in an array*/
games.forEach(game => game.addEventListener('click', memoryGame));



let cardOne, cardTwo;

function memoryGame() {
    this.classList.add('flip');
    
}