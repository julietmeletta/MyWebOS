function updateTime() {
    var date = new Date().toLocaleString().substring(0,8);
    var time = new Date().toLocaleString().substring(10);
    var dateText = document.querySelector("#dateElement")
    var timeText = document.querySelector("#timeElement");
    dateText.innerHTML = date;
    timeText.innerHTML = time;
}
setInterval(updateTime, 1000);


var welcomeScreen = document.querySelector("#welcome");
var welcomeScreenOpen = document.querySelector("#welcome-open");
var welcomeScreenClose = document.querySelector("#welcome-close");
welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});
welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

var quotesScreen = document.querySelector("#quotes");
var quotesScreenOpen = document.querySelector("#quotes-open");
var quotesScreenClose = document.querySelector("#quotes-close");
quotesScreenClose.addEventListener("click", function() {
  closeWindow(quotesScreen);
});
quotesScreenOpen.addEventListener("click", function() {
  openWindow(quotesScreen);
});

function closeWindow(element) {
    element.style.display = "none";
}
var biggestIndex = 1;
function openWindow(element) {
    element.style.display = "flex";
    biggestIndex++;
    element.style.zIndex = biggestIndex;
}


// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("quotes"));

// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "-header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "-header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var quoteArray = ["\"We are Groot\"<br>-Groot","\"I can do this all day\"<br>-Captain America","\"I am Iron Man\"<br>-Iron Man",
    "\"Why is Gamora?\"<br>-Drax", "\"Avengers Assemble\"<br>-Captain America","\"I'm always angry\"<br>-Bruce Banner","\"I love you in every universe\"<br>-Doctor Strange",
    "\"Wakanda Forever\"<br>-Black Panther","\"We're the guardians of the galaxy\"<br>-Star Lord","\"A thing isn't beautiful because it lasts\"<br>-Vision",
    "\"What is grief, if not love preservering?\"<br>-Vision","\"I have nothing to prove to you\"<br>-Captain Marvel","\"With great power there must also come great responsibility\"<br>-Uncle Ben",
    "\"You didn't see that coming\"<br>-Pietro Maximoff","\"Earth is closed today\"<br>-Iron Man","\"Death is what gives life meaning\"<br>-The Ancient One","\"I'm Mary Poppins, y'all!\"<br>-Yondu",
    "\"On your left\"<br>-Captain America","\"I love you 3000\"<br>-Morgan Stark","\"I am burdened with glorious purpose\"<br>-Loki","\"Higher, further, faster\"<br>-Captain Marvel",
    "\"Just becasue something works doesn't mean it can't be improved\"<br>-Shuri","\"Nothing goes over my head. My reflexes are too fast.\"<br>-Drax"];
var quoteIndex = parseInt(Math.random()*23);
document.getElementById("quote").innerHTML = quoteArray[quoteIndex];
var nextQuote = document.querySelector("#next-quote");
nextQuote.addEventListener("click", function() {
  goToNextQuote();
});
function goToNextQuote() {
    if (quoteIndex<22) {
        document.getElementById("quote").innerHTML = quoteArray[quoteIndex+1];
        quoteIndex++;
    } else {
        document.getElementById("quote").innerHTML = quoteArray[0];
        quoteIndex = 0;
    }
}