console.log("ms1 review");

let dogContent = document.getElementById("dogs");
let rainbowContent = document.getElementById("rainbows");
let monkeyBtn = document.getElementById("monkeyfy");
let horseBtn = document.getElementById("horsefy");
let dogH1 = document.getElementById("dogH1");
let rainbowH1 = document.getElementById("rainbowH1");


let dogPics = {
  pics: [
    { url: "img/dog1.jpeg", title:"Good Dog" },
    { url: "img/dog2.jpeg", title:"Fuzzy Dog" },
    { url: "img/dog3.jpeg", title:"Happy Dog" }
  ]
};


let bowPics = {
  pics: [
    { url: "img/rainbow1.jpeg", title:"Good Rainbow" },
    { url: "img/rainbow2.jpeg", title:"Fuzzy Rainbow" },
    { url: "img/rainbow3.jpeg", title:"Happy Rainbow" }
  ]
};


// dynamically create some elements to insert pics into
// make n sections: n is based on number of imgs
// insert the pictures 
// loop through images and create sections one at a time



for (let i=0; i < dogPics.pics.length; i++) {
  let section = document.createElement("section");
  section.setAttribute("class", "dog-card card");
  section.style.backgroundImage = `url(${dogPics.pics[i].url})`;
  dogContent.appendChild(section);
}


for (let i=0; i < bowPics.pics.length; i++) {
  let section = document.createElement("section");
  section.setAttribute("class", "rainbow-card card");
  section.style.backgroundImage = `url(${bowPics.pics[i].url})`;
  rainbowContent.appendChild(section);
}


monkeyBtn.addEventListener("click", function() {
  monkeyBtn.classList.toggle("monkey");
  let dogCards = document.getElementsByClassName("dog-card");
  for (let i=0; i < dogCards.length; i++) {
    // image change
    if (this.classList.contains("monkey")) {
      dogCards[i].style.backgroundImage = "url(img/dog-monkey.jpeg)";
    } else {
      dogCards[i].style.backgroundImage = `url(${dogPics.pics[i].url})`;
    }
    // border change
    dogCards[i].classList.toggle("fancy-border");
  }
  // button text change
  // h1 text change
  if (this.classList.contains("monkey")) {
    this.innerHTML = "Dogify It!"; // using "this" because "this" is defined as the button in this instance
    dogH1.innerHTML = "Monkey"; // using "dogH1" because we made this a variable that says "document.getElementById("dogH1");" at the beginning
  } else {
    this.innerHTML = "Monkeyfy It!";
    dogH1.innerHTML = "Dog";
  }
});


horseBtn.addEventListener("click", function() {
  this.classList.toggle("horse");
  let horseCards = document.getElementsByClassName("rainbow-card");
  for (let i=0; i < horseCards.length; i++) {
    // image change
    if (this.classList.contains("horse")) {
      horseCards[i].style.backgroundImage = "url(img/horse-rainbow.jpeg)";
    } else {
      horseCards[i].style.backgroundImage = `url(${bowPics.pics[i].url})`;
    }
    // border change
    horseCards[i].classList.toggle("fancy-border");
  }
  // button text change
  // h1 text change
  if ( horseBtn.classList.contains("horse") ) {
    this.innerHTML = "Rainbowfy It!"; // using "this" because "this" is defined as the button in this instance
    rainbowH1.innerHTML = "Horse"; // using "dogH1" because we made this a variable that says "document.getElementById("dogH1");" at the beginning
  } else {
    this.innerHTML = "Horsefy It!";
    rainbowH1.innerHTML = "Rainbow";
  }
});


/* 
How to make this code better:
- use single responsibility
  - split duties into individual functions
    - image change
    - text change
    - border change

- need to make DRY code
  - bows + dogs share exact codes
  - repetitive if statements in callback

*/

