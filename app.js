const app = document.getElementById("quote");

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(container);

const getAdvice = () => {
  document.getElementById("btn").disabled = true;

  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const previousCard = document.getElementById("card");
      if (previousCard != null) previousCard.remove();
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      card.setAttribute("id", "card");

      const p = document.createElement("p");
      p.textContent = data.slip.advice;

      container.appendChild(card);
      card.appendChild(p);
    })
    .catch((error) => {
      const errorMessage = document.createElement("marquee");
      errorMessage.textContent =
        `Something went wrong :( What went wrong? this:` + error;
      app.appendChild(errorMessage);
    });

  setTimeout(() => (document.getElementById("btn").disabled = false), 5000);
};
