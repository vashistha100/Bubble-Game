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
  let timer = 60;
  var interval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").innerText = timer;
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

// runTimer()

makeBubble();
