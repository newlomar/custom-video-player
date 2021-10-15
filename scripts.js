/* Selecionar os elementos */

const video = document.querySelector("[data-js='video']");
const playButton = document.querySelector("[data-js='playButton']");
const progressBar = document.querySelector("[data-js='progressBar'");
const volumeBar = document.querySelector("[data-js='volumeBar']");
const speedBar = document.querySelector("[data-js='speedBar']");
const skipLess10 = document.querySelector("[data-skip='-10']");
const skipPlus25 = document.querySelector("[data-skip='25']");

/* Criar as funções */

function alterVideoStatus() {

  if (video.paused) {
    video.play();
    playButton.textContent = '| |'
  }

  else {
    video.pause();
    playButton.textContent = '►'
  }

}

function alterVideoVolume() {

  video.volume = Number(volumeBar.value);

}

function alterVideoSpeed() {

  video.playbackRate = Number(speedBar.value)

}

function alterVideoProgress() {

}

function updateProgressBar() {

  progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;

}

/* Conectar com os events Listeners */


video.addEventListener('click', alterVideoStatus)
playButton.addEventListener('click', alterVideoStatus)
volumeBar.addEventListener('click', alterVideoVolume)
speedBar.addEventListener('click', alterVideoSpeed)

setInterval(updateProgressBar, 1000)