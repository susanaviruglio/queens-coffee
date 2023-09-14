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



// function with the question mark to the front

function questionImg() {
    let questionMark = Array(16).fill('assets/images/question.png');

    for (let i = 0; i < questionMark.length; i++) {
        let newImg = document.createElement('img');
        newImg.setAttribute('src', questionMark[i]);
        newImg.setAttribute("alt", "Purple question mark");
        newImg.setAttribute('id', i);
        newImg.setAttribute('onclick', 'flipCard(' + i + ')');
        document.getElementById('card-game').appendChild(newImg);
    }

}

let game = questionImg();



function flipCard(n) {
    document.getElementById(n).setAttribute('class', 'flipedcard');


    /*for (let i = 0; i < gameInc.length; i++) {
        gameInc.setAttribute('display', 'none');
    }*/
    console.log(n);
}



// cards shuffle already once open the page ready for the game



function backImg() {
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
        //newBack.setAttribute('id', i);
        //newBack.setAttribute('onclick', 'flipCard(' + i + ')');
        document.getElementById('back-game').appendChild(newBack);

        doubleCard.splice(shuffleBack, 1); // Remove the used card from the doubleCard array

    }

}

let gameShuffle = backImg();







// I created a button to start the game


function buttonColor(event) {
    button.style.backgroundColor = "#dcf9fe";
    button.innerHTML = "Reset Game";
    button.style.color = '#d91979';
    button.style.borderColor = '#0d4953';
}

let button = document.getElementById('buttoncolor');
button.addEventListener('click', buttonColor);







