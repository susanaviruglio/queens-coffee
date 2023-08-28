/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* Memory game here--------------------------------------------*/

/* function to rotate the cards by click , add click event to all the cards--------------------*/

document.addEventListener('DOMContentLoaded', function(){
    let clicks = document.getElementsByClassName('square');
    for (let click of clicks) {
        click.addEventListener('click', function(){
            if (this !== cardOne) {
                let backs = document.getElementsByClassName('card');
                for (let back of backs) {
                    this.classList.add('flip');
                    /*if(!cardOne){
                        return cardOne = this;
                    }
                    cardTwo = this;
                    let cardOneImg = cardOne.querySelector('card-back').children.src;
                    let cardTwoImg = cardTwo.querySelector('card-back');
                    console.log(cardTwoImg.src);
                    matchingCards(cardOneImg, cardTwoImg);*/
                }   
            }     
    })
 }
})

/* check if the cards match ----------------------------*/
let cardOne = document.getElementsByClassName('card-back');
for (let i = 0; i < main.length; i++) {
    console.log(cardOne[i].children);
}
let cardTwo = cardOne;


/*function matchingCards(img1,img2){
    if (img1 === img2) {
      alert('matched!')
        console.log('card matched!');
    } 
    console.log('card not matched!'); 
}*/


/*let cardOne, cardTwo = document.getElementsByClassName('card-back');
let backs = document.getElementsByClassName('card-front');
for (let back of backs) {
    this.classList.add('flip');
}*/

/* check answer if they match correct point*/
/* check wrong add a mistake*/
/*mix all the cards*/

