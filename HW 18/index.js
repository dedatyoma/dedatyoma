const timerElement = document.getElementById("timer");

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function wait(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function startCountdown(startTime) {
  let timeLeft = startTime;

  while (timeLeft >= 0) {
    timerElement.textContent = formatTime(timeLeft);

    if(timeLeft === 0) {
      alert('Time is up');
    }
    await wait(1);
    timeLeft--;
  }
}

startCountdown(85);