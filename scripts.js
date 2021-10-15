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
  }

  else {
    video.pause();
  }

}

function alterVolume() {

  video.volume = Number(volumeBar.value);
  console.log(video.volume)

}

/* Conectar com os events Listeners */

video.addEventListener('click', alterVideoStatus)
playButton.addEventListener('click', alterVideoStatus)
volumeBar.addEventListener('change', alterVolume)