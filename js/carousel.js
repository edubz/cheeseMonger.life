//right arrow
const right = document.getElementById("right");
//left arrow
const left = document.getElementById("left");

//radio buttons
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

//array of radio buttons
let radio_array = new Array(slide1, slide2, slide3);

//length of radio buttons array
let radio_length = radio_array.length;

//placemarker
let i = 0;

//when you click on a radio button set placemarker to that point
radio_array.forEach(
  (item, index) =>
    (item.onclick = () => {
      i = index;
      //console.log("index #" + (i + 1));
    })
);

right.onclick = () => {
  //button animation on click
  anime({
    targets: ".right-trigger",
    keyframes: [{ scale: 1.15 }, { scale: 1 }],
    easing: "easeOutElastic(1, .8)",
    duration: 250
  });
  //increment placemarker
  i++;

  //if placemarker is greater than the length of array go back to start '-1 accounts for the array starting at zero'
  if (i > radio_length - 1) {
    i = 0;
  }
  radio_array[i].checked = true;
  //console.log("index #" + (i + 1));
};

left.onclick = () => {
  anime({
    targets: ".left-trigger",
    keyframes: [{ scale: 1.15 }, { scale: 1 }],
    easing: "easeOutElastic(1, .8)",
    duration: 250
  });
  i--;
  if (i < 0) {
    i = radio_length - 1;
  }
  radio_array[i].checked = true;
  //console.log("index #" + (i + 1));
};
