let timer = 60;
let score = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function randomHitNumber() {
  var random = Math.floor(Math.random() * 10);
  document.getElementById("hitval").innerText = random;
}

function makeBubble() {
  var clutter = "";

  for (let i = 0; i < 168; i++) {
    var rand = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${rand}</div>`;
  }

  document.getElementById("pbtm").innerHTML = clutter;

  // for (let i = 0; i < 169; i++) {
  //   const bubble = document.createElement("div");
  //   bubble.classList.add("bubble");
  //   var rand = Math.floor(Math.random() * 10);
  //   bubble.innerText = rand;
  //   pbtmEl.appendChild(bubble);
  // }
}

function runTimer() {
  var interval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").innerText = timer;
    } else {
      clearInterval(interval);
      document.querySelector("#pbtm").innerHTML = `<h1>${score}</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", (e) => {
  console.log(e.target);
  const clickElm = e.target;
  if (clickElm.innerText === document.getElementById("hitval").innerText) {
    increaseScore();
    makeBubble();
    randomHitNumber();
  } else {
    makeBubble();
    randomHitNumber();
  }
});

randomHitNumber();
runTimer();
makeBubble();
