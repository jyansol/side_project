
var seconds = 180,
  countDiv = document.getElementById('countdown'),
  secondPass,
  countDown = setInterval(function() {
    "use strict";
    secondPass();
  }, 1000);
function secondPass() {
  "use strict";
  var minutes = Math.floor((seconds / 60)),
    remSeconds = seconds % 60;
  if (seconds < 10) {
    remSeconds = "0" + remSeconds;
  }
  countDiv.innerHTML = minutes + ":" + remSeconds;
  if (seconds > 0) {
    seconds = seconds - 1;
  } else {
    clearInterval(countDown);
    countDiv.innerHTML = 'Done';
  }
}


// [ 2 ]
// var time = 360;

// function countdown() {
//   var minutes = Math.floor(time / 60);
//   var seconds = time % 60;
//   document.body.innerHTML = minutes + ':' + seconds; // prints the countdown in the HTML
//   time = time - 1;
// }

// setInterval(countdown, 1000);