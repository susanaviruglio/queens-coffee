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
/*const games = document.querySelectorAll('.square');
/* for each method to select all in an array*/
/*games.forEach(game => game.addEventListener('click', memoryGame));*/

/*

let cardOne, cardTwo;

function memoryGame() {
    
    if (this !== cardOne) {
        this.classList.add('flip');
        if (!cardOne) {
            return cardOne = this;
        } 
        cardTwo = this;

        let cardOneImg = cardOne.querySelectAll('img');
        let cardTwoImg = cardTwo.querySelectAll('img');

        compareImgs(cardOneImg, cardTwoImg);
    }
    
}

function compareImgs(img1,img2) {
    if (img1 === img2) {
        alert('hey, it macth!');
    }
    alert('card not match!');
}*/

cardDecks = [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P];

imagesGames = [
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.png",
    "img5.png",
    "img6.png",
    "img7.png",
    "img8.png",
];

document.getElementById("card-game").innerHTML = cardDecks;
console.log(cardDecks);
console.log(imagesGames);
