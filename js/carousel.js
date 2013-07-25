


// Buttons
var next = document.getElementById('next');

next.onmouseover = function(event){
this.style.opacity = .5;
};

next.onmouseout = function(event){
  this.style.opacity = .2;
}


var previous = document.getElementById('previous');

previous.onmouseover = function(event){
this.style.opacity = .5;
};

previous.onmouseout = function(event){
  this.style.opacity = .2;
}





next.onclick = function(event){
var carousel = document.getElementById("carousel").style.marginLeft;

if (document.getElementById("carousel").style.marginLeft = "0px") {
  document.getElementById("carousel").style.marginLeft = "-612px";
}

  else if (document.getElementById("carousel").style.marginLeft = "-612px") {
    document.getElementById("carousel").style.marginLeft = "-1224px";
  }
  else {
    document.getElementById("carousel").style.marginLeft = "0px";
  }
};


previous.onclick = function(event){
var carousel = parseInt(document.getElementById("carousel").style.marginLeft.match(/\d+/)[0]);
console.log(carousel);
if (carousel = 0) {
  carousel -612 + "px";
}

};





// Create mouseoveer and mouseexit events for the buttons
// to change their opacity from .5 to .2

// Create onclick events to advance the images
