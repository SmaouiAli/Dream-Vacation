// Your JavaScript code goes here.

/* The code is creating an object named `images` with properties that represent different countries as
keys and their corresponding image file paths as values. This object can be used to display images
of different countries on a webpage or in a program. */

var images = {
  Italy: "./images/italy.jpeg",
  Myanmar: "./images/myanmar.jpeg",
  Egypt: "./images/egypt.jpeg",
  Peru: "./images/peru.jpeg",
  Rwanda: "./images/rwanda.jpeg",
};

document.getElementById("img").src = images.Italy;

/* This line of code is setting the `src` attribute of an HTML `img` element with the `id` of "img" to
the value of the `italy` property of the `images` object. This will display the image of Italy on
the webpage or in the program. */

document.getElementById("img").style.height = "300px"
document.getElementById("img").style.width = "600px"

/* This code is adding a click event listener to each element with the class "list". When a "list"
element is clicked, the code sets the `src` attribute of the `img` element with the `id` of "img" to
the value of the corresponding country image file path in the `images` object. Additionally, the
code sets the height of the `img` element to 300 pixels. */



for (var i = 0; i < document.getElementsByClassName("list").length; i++) {
  var target = document.getElementsByClassName("list")[i];
  target.addEventListener("click", function () {
    document.getElementById("img").src = images[this.innerText];
  });
}

/**
 * The function adds a new country to a list of dream places.
 */
function addCountry () {
    var country = document.getElementById("dream").value
   
    var li = document.createElement("li")
    li.innerText = country
 document.getElementById("dream-places-list").append(li)
}

/* This line of code is adding a click event listener to the HTML element with the `id` of "btn". When
the "btn" element is clicked, the `addCountry` function is called. This allows the user to add a new
country to a list of dream places by clicking the "btn" element. */

document.getElementById("btn").addEventListener("click",addCountry);

//minified code
// var target,images={Italy:"./images/italy.jpeg",Myanmar:"./images/myanmar.jpeg",Egypt:"./images/egypt.jpeg",Peru:"./images/peru.jpeg",Rwanda:"./images/rwanda.jpeg"};document.getElementById("img").src=images.Italy,document.getElementById("img").style.height="300px",document.getElementById("img").style.width="600px";for(var i=0;i<document.getElementsByClassName("list").length;i++)document.getElementsByClassName("list")[i].addEventListener("click",function(){document.getElementById("img").src=images[this.innerText]});function addCountry(){var e=document.getElementById("dream").value,t=document.createElement("li");t.innerText=e,document.getElementById("dream-places-list").append(t)}document.getElementById("btn").addEventListener("click",addCountry);