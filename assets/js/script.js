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
            alert('you click on me!');
    })
 }
})

/* check if the cards match ----------------------------*/
/* check answer if they match correct point*/
/* check wrong add a mistake*/
/*mix all the cards*/

