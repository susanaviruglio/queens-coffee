/*Memory game stars here*/

/* function with the question mark to the front, with the id "i" which give a different
value to each card. Also it has a onclick so with the flipCard function will turn and
it will show the back card */

function questionImg() {
    //this variable multiplies the same picture 16 times
    let questionMark = Array(16).fill("assets/images/question.png");

    // all the images are in an array
    for (let i = 0; i < questionMark.length; i++) {
        let newImg = document.createElement("img");
        newImg.setAttribute("src", questionMark[i]);
        newImg.setAttribute("alt", "Purple question mark");
        newImg.setAttribute("class", "question-mark");
        // the index is the id of each card, it will help for the matching function
        newImg.setAttribute("id", i);
        //pass index from this function to flipcard();
        newImg.setAttribute("onclick", "flipCard(" + i + ")");
        document.getElementById("card-game").appendChild(newImg); //appended to the DOM
    }
}

questionImg();

/* backCard is equal to all the 8 images in order, 
   doubleCard is the double of 8 images
   then, I appended all of them to the child of the div */

var backCard = [
    "assets/images/img1.png",
    "assets/images/img2.png",
    "assets/images/img3.png",
    "assets/images/img4.png",
    "assets/images/img5.png",
    "assets/images/img6.png",
    "assets/images/img7.png",
    "assets/images/img8.png",
];
var doubleCard = [...backCard, ...backCard];

//back images appended to the div
function backImgOrder() {
    // I need to call the function here to make it work;
    shuffle(doubleCard);
    console.log(doubleCard); // I have leave this to check the answer of the game
    for (i = 0; i < backCard.length * 2; i++) {
        let newCards = document.createElement("img");
        newCards.setAttribute("src", doubleCard[i]);
        newCards.setAttribute('alt', 'coffee images');
        newCards.setAttribute("id", "coffee-cards");
        newCards.setAttribute("id", i);
        document.getElementById("back-game").appendChild(newCards);
    }
}

backImgOrder();

// get all the images and push them into an array so I can shuffle them in the next function.
var cardAll = document.getElementById("back-game").children;

var tiles = [];// all the images are here so I am able to shuffle them

for (let i = 0; i < cardAll.length; i++) {
    tiles.push(cardAll[i]);
}

//this function src is from https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
    var m = array.length,
        t,
        i;

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
// game flipcard


var hasFlippedCard = false;//the user has not click anything yet
let firstClick, secondClick;//both clicks
var firstId;//the first click needs an id 
var pair = []; //array for the same pair of cards
var winCount = 0; //the counter will increase everything the player finds a match

function flipCard(n) {
    //n is the value from the index "i" from questionImg function
    let clicks = document.getElementById(n).classList.add("class", "flippedcard");

    //if the player has not click any card then:
    if (!hasFlippedCard) {
        //first click shows first card then hasFlipped is equal to true;
        firstId = n;
        hasFlippedCard = true;
        firstClick = doubleCard[n];
        //first card will be pushed straight away into the array
        pair.push(firstClick);

        return;

    } else {
        //second click shows the second card and hasflippedcard into false.
        pair.length < 2;//max length of the array is 2
        hasFlippedCard = false;
        secondClick = doubleCard[n];
        pair.push(secondClick);

    }
    if (pair[0] === pair[1]) {
        //everytime the user finds a pair the winCount will increase 1
        winCount += 1;

        if (winCount == 8) {
            /**the maximum that the wincount can increase is 8 , so if it increases
            * up to 8 , the timer will stop */
            stopTimer();
            //when the timer stops the player will find a message 
            let winMessage = document.getElementById('result');
            //style border from https://codepen.io/unnegative/pen/dVwYBq;
            winMessage.style.border = '5px solid transparent';
            winMessage.style.borderImage = 'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)';
            winMessage.style.borderImageSlice = '1';
            let message = `Well done! Your new record is ${secs + millsecs} ☕!`;
            winMessage.innerHTML = message;
            //at the same time the timer will desapear
            let hiddenTimer = document.getElementById('time');
            hiddenTimer.style.display = "none";
        }

    } else {
        //set a timer so the player can see both cards
        setTimeout(() => {
            document.getElementById(firstId).classList.remove("flippedcard");
            document.getElementById(n).classList.remove("flippedcard");
        }, 500);
    } // if the images are different while remove them from the array.
    while (pair.length > 0) {
        pair.pop();
    }
}


//Initial Time when the page is loaded 
var clearTime;
var milliseconds = 0,
    seconds = 0;
var millsecs, secs;

function setTimer() {
    //check milliseconds is equal to 60
    if (milliseconds === 60) {
        milliseconds = 0;
        seconds = seconds + 1;
    }
    /*ternary operator to show how many minutes should look
     and add a 0 to minutes if less than 10 */
    secs = seconds < 10 ? "0" + seconds + ": " : seconds + ": ";
    millsecs = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    if (seconds === 60) {
        seconds = 0;

    }

    // display the Count-Up Timer
    let timerElement = document.getElementById("time");
    timerElement.innerHTML = 'Time: ' + secs + millsecs;
    /* call the seconds counter after displaying the Count-Up 
    and increment seconds by +1 to keep it counting */
    milliseconds++;

    clearTime = setTimeout("setTimer( )", 20);
};

setTimer();

/*********** stop timer when the player has found all the pairs *********/
function stopTimer() {
    if (milliseconds !== 0 || seconds !== 0) {
        /* display the Count-Up Timer after clicking on pause button */

        var x = document.getElementById("time");
        var stopTime = secs + millsecs;
        x.innerHTML = stopTime;

        /* clear the Count-Up using the setTimeout( ) 
            return value 'clearTime' as ID */
        clearTimeout(clearTime);

    }
}

/*********** stop timer *********/

