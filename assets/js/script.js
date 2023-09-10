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

// function with the question mark to the front

function questionImg() {
    let questionMark = Array(16).fill('assets/images/question.png');

    for (let i = 0; i < questionMark.length; i++) {
        let newImg = document.createElement('img');
        newImg.setAttribute('src', questionMark[i]);
        newImg.setAttribute("alt", "Purple question mark");
        document.getElementById('card-game').appendChild(newImg);
    }

}

let game = questionImg();



// cards hidden underneath
// button game in html: id="buttoncolor"
const backCard = ['assets/images/img1.png', 'assets/images/img2.png', 'assets/images/img3.png',
    'assets/images/img4.png', 'assets/images/img5.png', 'assets/images/img6.png',
    'assets/images/img7.png', 'assets/images/img8.png'];
const doubleCard = [...backCard, ...backCard];

let gameLength = doubleCard.length;


for (let i = 0; i < gameLength; i++) {
    let shuffleBack = Math.floor(Math.random() * doubleCard.length);
    let numberCards = doubleCard[shuffleBack];



    let newBack = document.createElement('img');
    newBack.setAttribute('src', backCard[shuffleBack]);
    newBack.setAttribute('alt', 'Coffee image');
    //newBack.style.visibility = 'hidden';
    document.getElementById('back-game').appendChild(newBack);


}



function backImg(event) {
    let shuffleBack = document.getElementById('back-game').children;

    for (let i = 0; i < shuffleBack.length; i++) {
        let randomCards = Math.floor(Math.random() * shuffleBack.length);
        let pictures = shuffleBack[randomCards];
        //images need to repeat at least 1 time

        console.log(pictures);

    }

}

let button = document.getElementById('buttoncolor');
button.addEventListener('click', backImg);




// I created a button to start the game



/*button.style.backgroundColor = "#dcf9fe";
button.innerHTML = "Reset Game";
button.style.color = '#d91979';
button.style.borderColor = '#0d4953';*/










