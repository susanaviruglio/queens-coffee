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

/* function with the question mark to the front, with the id "i" which give a different
value to each card. Also it has a onclick so with the flipCard function will turn and
it will show the back card */

function questionImg() {
    let questionMark = Array(16).fill("assets/images/question.png");

    for (let i = 0; i < questionMark.length; i++) {
        let newImg = document.createElement("img");
        newImg.setAttribute("src", questionMark[i]);
        newImg.setAttribute("alt", "Purple question mark");
        newImg.setAttribute("id", i);
        newImg.setAttribute("onclick", "flipCard(" + i + ")");
        document.getElementById("card-game").appendChild(newImg);
    }
}

let game = questionImg();



//back images appended to the div
function backImgOrder() {
    let backCard = ['assets/images/img1.png', 'assets/images/img2.png', 'assets/images/img3.png',
        'assets/images/img4.png', 'assets/images/img5.png', 'assets/images/img6.png',
        'assets/images/img7.png', 'assets/images/img8.png'];
    let doubleCard = [...backCard, ...backCard];
    for (i = 0; i < backCard.length * 2; i++) {
        let newCards = document.createElement('img');
        newCards.setAttribute('src', doubleCard[i]);
        newCards.setAttribute('class', 'coffee-cards');
        document.getElementById('back-game').appendChild(newCards);

    }

    //give a independent value to each img in the array 'data-framework'

    let cardOne = document.getElementById('back-game').children[0];
    cardOne.setAttribute('data-framework', 'white');

    let cardTwo = document.getElementById('back-game').children[1];
    cardTwo.setAttribute('data-framework', 'brown');

    let cardThree = document.getElementById('back-game').children[2];
    cardThree.setAttribute('data-framework', 'lightblue');

    let cardFour = document.getElementById('back-game').children[3];
    cardFour.setAttribute('data-framework', 'blue');

    let cardFive = document.getElementById('back-game').children[4];
    cardFive.setAttribute('data-framework', 'orange');

    let cardSix = document.getElementById('back-game').children[5];
    cardSix.setAttribute('data-framework', 'pink');

    let cardSeven = document.getElementById('back-game').children[6];
    cardSeven.setAttribute('data-framework', 'yellow');

    let cardEight = document.getElementById('back-game').children[7];
    cardEight.setAttribute('data-framework', 'green');


    //second part of the array, I want the same frame work of the pair

    let cardNine = document.getElementById('back-game').children[8];//same as 0 
    cardNine.setAttribute('data-framework', 'white');

    let cardTen = document.getElementById('back-game').children[9]; //same as 1 
    cardTen.setAttribute('data-framework', 'brown');

    let cardEleven = document.getElementById('back-game').children[10];//same as 2 
    cardEleven.setAttribute('data-framework', 'lightblue');

    let cardTwelve = document.getElementById('back-game').children[11];//same as 3 
    cardTwelve.setAttribute('data-framework', 'blue');

    let cardThirteen = document.getElementById('back-game').children[12];// same as 4 
    cardThirteen.setAttribute('data-framework', 'orange');

    let cardFourteen = document.getElementById('back-game').children[13];// same as 5 
    cardFourteen.setAttribute('data-framework', 'pink');

    let cardFifteen = document.getElementById('back-game').children[14];//same as 6 
    cardFifteen.setAttribute('data-framework', 'yellow');

    let cardSixteen = document.getElementById('back-game').children[15];// same as 7 
    cardSixteen.setAttribute('data-framework', 'green');


    let tiles = [];
    tiles.push(cardOne, cardTwo, cardThree, cardFour, cardFive, cardSix, cardSeven, cardEight,
        cardNine, cardTen, cardEleven, cardTwelve, cardThirteen, cardFourteen, cardFifteen, cardSixteen);



    //this function src is from https://bost.ocks.org/mike/shuffle/
    function shuffle(array) {
        var m = array.length, t, i;
        console.log(m);
        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;

        }

        return array;
    }
    shuffle(tiles);


}
backImgOrder();





























// cards shuffle alre    ady once open the page ready for the game
/*function backImg() {
    const backCard = ['assets/images/img1.png', 'assets/images/img2.png', 'assets/images/img3.png',
        'assets/images/img4.png', 'assets/images/img5.png', 'assets/images/img6.png',
        'assets/images/img7.png', 'assets/images/img8.png'];
    const doubleCard = [...backCard, ...backCard];
 
    for (let i = 0; i < backCard.length * 2; i++) {
        let shuffleBack = Math.floor(Math.random() * doubleCard.length); //get a random index
        let numberCards = doubleCard[shuffleBack]; // use this index to pick a random card
 
        let newBack = document.createElement('img');
        newBack.setAttribute('src', numberCards); //use the chosen card as the src
        newBack.setAttribute('alt', 'Coffee image');
        newBack.setAttribute('class', 'coffee-card');
        //newBack.setAttribute('id', i);
        //newBack.setAttribute('class', 'flipCard(' + i + ')');
        document.getElementById('back-game').appendChild(newBack);
 
        doubleCard.splice(shuffleBack, 1); // Remove the used card from the doubleCard array
 
    }
 
}
 
let gameShuffle = backImg();*/

// cards flip one chick on the front card (question mark)
/*let count = 0;
let activeTile = null; // referse to tile which the user just click on
var awaitingEndOfMove = false; // when is set to true, the user is waiting for the next tile.
let select = document.getElementsByClassName('coffee-card');*/
let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard(n) {
    let clicks = document.getElementById(n).setAttribute("class", "flipedcard");


    if (!hasFlippedCard) {
        //first flip
        hasFlippedCard = true;
        firstCard = n;
    } else {
        //second flip
        hasFlippedCard = false;
        secondCard = n;
        //this card match ?
    }

}






// I created a button to start the game

function buttonColor(event) {
    button.style.backgroundColor = "#dcf9fe";
    button.innerHTML = "Reset Game";
    button.style.color = "#d91979";
    button.style.borderColor = "#0d4953";
}

let button = document.getElementById("buttoncolor");
button.addEventListener("click", buttonColor);
