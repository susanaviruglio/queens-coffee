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
    let questionMark = Array(16).fill('assets/images/question.png');

    for (let i = 0; i < questionMark.length; i++) {
        let newImg = document.createElement('img');
        newImg.setAttribute('src', questionMark[i]);
        newImg.setAttribute('alt', 'Purple question mark');
        newImg.setAttribute('class', 'question-mark');
        newImg.setAttribute('id', i);
        newImg.setAttribute('onclick', 'flipCard(' + i + ')');
        document.getElementById('card-game').appendChild(newImg);
    }
}

let game = questionImg();


/* backCard is equal to all the 8 images in order, 
   doubleCard is the double of 8 images
   then, I appended all of them to the child of the div */

var backCard = ['assets/images/img1.png', 'assets/images/img2.png', 'assets/images/img3.png',
    'assets/images/img4.png', 'assets/images/img5.png', 'assets/images/img6.png',
    'assets/images/img7.png', 'assets/images/img8.png'];
var doubleCard = [...backCard, ...backCard];

//back images appended to the div
function backImgOrder() {

    shuffle(doubleCard);
    console.log(doubleCard);
    for (i = 0; i < backCard.length * 2; i++) {
        let newCards = document.createElement('img');
        newCards.setAttribute('src', doubleCard[i]);
        newCards.setAttribute('class', 'coffee-cards');
        newCards.setAttribute('id', i);
        newCards.setAttribute('onclick', 'flipCard(' + i + ')');
        document.getElementById('back-game').appendChild(newCards);

    }


}

backImgOrder();

// get all the images and push them into an array so I can shuffle them in the next function.

var cardAll = document.getElementById('back-game').children;
var tiles = [];

for (let i = 0; i < cardAll.length; i++) {
    tiles.push(cardAll[i]);

}

//this function src is from https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
    var m = array.length, t, i;

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





//compare the cards in the next function flipcard(n) which value n come from the backCardImg()

var hasFlippedCard = false;
let firstClick, secondClick;
var pair = [];
function flipCard(n) {

    let clicks = document.getElementById(n).classList.add('class', 'flippedcard');
    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstClick = doubleCard[n];
        pair.push(firstClick);
        console.log(firstClick);

    } else {
        //second click
        hasFlippedCard = false;
        secondClick = doubleCard[n];
        pair.push(secondClick);
        console.log(secondClick);

        // do this cards match ?
        if (pair[0] === pair[1]) {
            console.log('it matched!');
        } else {

        }



    }

}

















    // I created a button to start the game

/*function buttonColor(event) {
    button.style.backgroundColor = "#dcf9fe";
    button.innerHTML = "Reset Game";
    button.style.color = "#d91979";
    button.style.borderColor = "#0d4953";
}

let button = document.getElementById("buttoncolor");
button.addEventListener("click", buttonColor);*/