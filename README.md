# Queen's Coffee

<img src=/assets/images/presentation.png>

## Interactive Frontend Development Milestone Project by Susana Viruglio

[Queen's Coffee, Have a look here!](https://susanaviruglio.github.io/queens-coffee/)

Queen's Coffee is website which has a memory game to entertain the everybody and to test their memory. The only purpose of this project is just Educational. The idea of the name came from my favourite music band which is Queen, my favourite colour is pink and also I love coffee, so I decided to mix all this to create this project.
My main purpose is entertain and challenge everybody who wants to play:

1. Photos: discover cute coffee faces while you play.
2. Colours: there are eight different coffee images which I have created all of the with different background colours, two whites, two greens, two pinks and two blues; just to make it more challenging.
3. Explanation: the explanation of how to play the game is just at the home page with just a simple image.
4. Timer: I have created a timer to make it more challenging and less boring for those who are really fast.

### External User Goals

- Have fun playing the game.

### Site Owner's Goals

- Same as the external users - make a game that you'd enjoy playing yourself.

### Potential Features To Include

- Build a simple single-player pattern-matching memory game.
- Clear explanation how to play the game at the index.html page.
- Memory game based on coffee cups which the user will need to find the pair.

## UX AIMS

- To attract users from any age and want to have fun.
- To challenge users by getting the best score with the timer.
- To provide users with attracting colours and clean page.
- To create a fully responsive design for several devices as desktop, tablets and phones, etc.

## USERS STORIES

1. **How can I play the game?** I am a 6 years old child who wants to play a memory game for first time. I would like to receive a quick explanation about how to play.
2. **How can I improve my visual memory?** I am interested in improving my visual memory and I have been recommended to play memory games where I can find the pairs.
3. **How can know my score?** I found memory games quite boring sometimes and I would like one with a bit of challenge.

## DESIGN EVOLUTION

### First Design using _Figma_

#### Home Page

<img src=/assets/images/figmaone.png>

#### Game Area

It was my first idea of the game at the beginning.
<img src=/assets/images/figmatwo.png>

### First Design with colour using _Canvas_

I used Canvas to create the design for the project. I chose this image for the menu page and I have decided that it will be the front page. At the beginning, I wanted to create a coffee shop website, but then I changed it for a game keeping the same coffee theme.

<img src=/assets/images/firstdesign.png>

On the top left, I have created my logo using Canvas, I have chosen a Sakura flower in this occasion. In the middle, I wrote the name of the website 'Queen's Coffee' and the leaves in the middle are brown which symbolises the coffee grain.

<img src=/assets/images/logo.png>

#### Home page

#### Header

The header on both pages have a logo on the top left which a direct link to the home page.

#### Section

On the main section, I have provided the website with an image with the background of a book and a coffee next to it.

<img src=/assets/images/secondesign.png>

In this section the user is able to see how to play the game by looking at the two matching images.
I added the little crown on top of the coffee which it shows reference to the project's name.

#### Footer

I dediced to create a very simple footer with the rights of the website; 'Queen's Coffee'.

### Game

Once the user has accepted to play the game they will find a page with the same background color.
As I mentioned previously the header is the same as the home page.

#### Game desing

- Front Card: it is purple with a question mark on top.

<img src=/assets/images/question.png>

- Back cards: there are 8 variety of cards, that the user will find while playing.
  All images come from this website link: *https://www.freepik.com/* I have changed the background colour to make it more fun and challenging.

<img src=/assets/images/imgone.png>
<img src=/assets/images/imgtwo.png>
<img src=/assets/images/imgthree.png>
<img src=/assets/images/imgfour.png>
<img src=/assets/images/imgfive.png>
<img src=/assets/images/imgsix.png>
<img src=/assets/images/imgseven.png>
<img src=/assets/images/imgeight.png>

## TESTING 

### First Steps

At the beginning of the project I created the game in HTML by usign a list and afterwards, I changed for divs. I struggled to mix the images in Javascript and compare them.

I created an eventListener click for all the game images. But I was stuck on the next section of the conditions. I was having the problem of compare the images because I used image for the front and the back card. So when I clicked the image it was reconising the image on the top as a first try.

So, I decided to change my approach and create the game using only Javascript.

### Using Javascript to append the images

As my first experience working with Javascript I was not sure how to create the array of images and append the to the DOM. So I received support from my teacher who explained with simple images how to create a random array of images.

Once I was starting adding the images for the project I was struggling to create a random index and mix them all up.

1. Firstly, I started creating a function with all the coffee images. I wanted to use the splice method so while the images are mixing non of them would repeat on my array,but it was giving the error: 'this is not a function'
2. Then, I took all the array out of the function, I created for loop while I used math floor math random methods then I used splice and it did not work either.
3. I tried several times, step by step what is the best method but it was the only way to create a random array.

**The solution was**:
I received suppor from a tutor in _Code Institute_.

He said that it looked like I was trying to shuffle the doubleCard array to ensure the cards in my memory game were random, and then I was using the shuffled cards to create the images.
However, there were a few issues with my current approach:

I was not using the splice method to remove the used cards from the doubleCard array, which would cause repetition.

The line **newBack.setAttribute('src', backCard[shuffleBack])**; was using the wrong array (backCard instead of doubleCard).

// ... (rest of your code)

    const backCard = ['assets/images/img1.png', 'assets/images/img2.png', 'assets/images/img3.png',
    'assets/images/img4.png', 'assets/images/img5.png', 'assets/images/img6.png',
    'assets/images/img7.png', 'assets/images/img8.png'];

    const doubleCard = [...backCard, ...backCard];

    for (let i = 0; i < backCard.length _2; i++) {
    let shuffleBack = Math.floor(Math.random()_ doubleCard.length); // Get a random index
    let numberCards = doubleCard[shuffleBack];
    // Use that index to pick a random card

    let newBack = document.createElement('img');
    newBack.setAttribute('src', numberCards); // Use the chosen card as the src
    newBack.setAttribute('alt', 'Coffee image');
    //newBack.style.visibility = 'hidden';
    document.getElementById('back-game').appendChild(newBack);

    doubleCard.splice(shuffleBack, 1); // Remove the used card from the doubleCard array
    }

// ... (rest of your code)

He made some changes:

- Used numberCards instead of backCard[shuffleBack] as the source for the new image.
- After appending the card, he removed it from the doubleCard array to ensure it did not get repeated.

### Second approach append the images first without mix them up

Although, I had all the images created and shuffled. I struggled to compare them because it did not have an specific id. So I went back to append all the images in order first.

I created a function to shuffle all the images ,but my approach was not being successfull because the images ,already appended to the DOM, were not an array.

I used this website to support me how to push an image to an array.
*https://stackoverflow.com/questions/38824349/how-to-convert-an-object-to-an-array-of-key-value-pairs-in-javascript*

**Solution**: I used the _push()_ in a for loop to push them all to an array.

### I shuffled the images ,but the changed did not appear in the DOM

I had all the cards images shuffle but it did not show any difference in the DOM.

**Solution**: with the help of my teacher he said I should had called the function _array()_ onto the _backImgOrder()_.

### Click event issues

As I used bootstrap to create the grid system with all the images I could not find a way to link an specific card to turn and show the card behind.

**Solution**: With the support of my teacher we added a _setAttribute_ to the main array with the value of id and for it we used the index from the for loop _i_. We added an _onclick_ attribute with the value of the function + _i_.
Then we created a new function with the value _n_ which _n_ is the number of the index. So I was able to click them and compare them.

## DEPLOYMENT

### Github

This project is deployed using GitHub pages using the following process:

**Deploying a GitHub Repository via GitHub Pages**

1. In your Repository section, select the Repository you wish to deploy.
2. In the top horizontal Menu, locate and click the Settings link.
3. Inside the Setting page, around halfway down locate the GitHub Pages Section.
4. Under Source, select the None tab and change it to Master and click Save.
5. Finally once the page resets scroll back down to the GitHub Pages Section to see the following message *"Your site is ready to be published at (Link to the GitHub Page Web Address)"*. It can take time for the link to open your project initially, so please don't be worried if it down not load immediately.

**Forking the Github Repository**

You can fork a GitHub Repository to make a copy of the original repository to view or make changes without it affecting the original repository.

- Find the GitHub repository.
- At the top of the page to the right, under your account, click the Fork button.
- You will now have a copy of the repository in your GitHub account.
  
**Making a Local Clone**

1. Find the GitHub Repository.
2. Click the Code button
3. Copy the link shown.
4. In Gitpod, change the directory to the location you would like the cloned directory to be located.
5. Type git clone, and paste the link you copied in step 3.
6. Press Enter to have the local clone created.

[Test the Web here: Queen's Coffee.](https://susanaviruglio.github.io/queens-coffee/)

## HTML AND CSS VALIDATOR

### Home page

#### **HTML**
<img src=/assets/images/testingone.png>
<img src=/assets/images/testingtwo.png>

**CSS**

<img src=/assets/images/testingthree.png>

## Game page

#### **HTML**

<img src=/assets/images/testingfour.png>
  
* I have warning because I do not have a heading in my game section.
<img src=/assets/images/testingfive.png>

#### **CSS**
<img src=/assets/images/testingsix.png>

**JavaScript**

<img src=/assets/images/testingseven.png>

#### **Documentation on using Developer Tools Lighthouse**

<img src=/assets/images/testingeight.png>

# CREDITS

## CODE FROM OTHER SOURCES

All the code that I have used to create this website was taken from Code Institute learning platform a part from the next following sources:

[BOOTSTRAP](https://getbootstrap.com/)

- I used _Bootstrap 4.0_ version, mainly I used the gryd system to build layouts.
- To create the grid in my game.

[W3SCHOOL](https://www.w3schools.com/)

- Justify content: align-content property.

[CodePel](https://www.codepel.com/vanilla-javascript/javascript-count-up-timer/)

- To create a timer for my game.

[Memory Game Video Tutorial](https://www.youtube.com/watch?v=ZniVgo8U7ek)

- An idea how to create a memory game.
- Used the compare statement for the *flipCard()* function.
- CSS values for the images.

[Shuffle Images](https://bost.ocks.org/mike/shuffle/)

- To shuffle the images for the game.

[Push Method](https://stackoverflow.com/questions/38824349/how-to-convert-an-object-to-an-array-of-key-value-pairs-in-javascript)

- To push images from the DOM to an array.

[CSS src code](https://codepen.io/unnegative/pen/dVwYBq)

- When the game ends and the timer stops, the user will find a rainbow border with the message.
