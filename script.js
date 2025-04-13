// Timer (10 min countdown)
let seconds = 600;
const timerDisplay = document.getElementById('timer');
const countdown = setInterval(() => {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  timerDisplay.textContent = `Time Left: ${min}:${sec.toString().padStart(2, '0')}`;
  if (seconds-- <= 0) {
    clearInterval(countdown);
    alert("Time's up!");
  }
}, 1000);

let currentIndex = 0;

function showQuestion(index) {
  const q = questions[index];
  document.getElementById("question").innerText = `Q${index + 1}: ${q.question}`;

  let optionHTML = "";
  q.options.forEach((opt, i) => {
    optionHTML += `<div><input type="radio" name="option" id="opt${i}"><label for="opt${i}">${opt}</label></div>`;
  });

  document.getElementById("options").innerHTML = optionHTML;
}



// qutions on loading
window.onload = function() {
  showQuestion(currentIndex);
};


// Generate question buttons
const navContainer = document.getElementById('navigator');
for (let i = 1; i <= 50; i++) {
  const btn = document.createElement('button');
  btn.innerText = i;
  btn.onclick = () => goToQuestion(i);
  navContainer.appendChild(btn);
}
