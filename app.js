const app = document.getElementById("quote");

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(container);

var request = new XMLHttpRequest();

// Make a get request to the server
request.open("GET", "https://api.adviceslip.com/advice", true);

request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  // If the request was successful, display the quote
  if (request.status >= 200 && request.status < 400) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const p = document.createElement("p");
    p.textContent = data.slip.advice;

    container.appendChild(card);
    card.appendChild(p);
  }

  // If the request was unsuccessful, put a scrolling message for the same
  else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Something went wrong :(`;
    app.appendChild(errorMessage);
  }
};

request.send();
