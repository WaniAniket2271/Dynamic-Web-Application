let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let quoteInput = document.getElementById("quoteInput");
let result = document.getElementById("result");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");

let options = {
    method: "GET"
}
let counter = 0;
let url = "https://apis.ccbp.in/random-quote";
let timerId = null;

function start() {
    spinner.classList.remove("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            quoteDisplay.textContent = jsonData.content;
            timerId = setInterval(function() {
                counter += 1;
                timer.textContent = counter;
            }, 1000);
        });
}
submitBtn.addEventListener("click", function(event) {
    if (quoteInput.value === quoteDisplay.textContent) {
        clearInterval(timerId);
        result.textContent = "You typed in " + counter;
    } else {
        result.textContent = "You typed incorrect sentence"
    }
})
resetBtn.addEventListener("click", function(event) {
    clearInterval(timerId);
    counter = 0;
    timer.textContent = counter;
    quoteDisplay.textContent = "";
    start();
})

start();