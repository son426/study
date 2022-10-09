const PLAYKEY = "?autoplay=1&mute=1";
const PAUSEKEY = "?autoplay=0&mute=0";

function zoomIn(e) {
  e.target.parentElement.parentElement.style.transform = "scale(1.1)";
  e.target.parentElement.parentElement.style.border = "1px black solid";
  e.target.parentElement.parentElement.style.zIndex = 1;
  if (e.target.src.includes(PAUSEKEY)) {
    e.target.src = e.target.src.replace(PAUSEKEY, PLAYKEY);
  } else {
    e.target.src += PLAYKEY;
  }
}

function zoomOut(e) {
  e.target.parentElement.parentElement.style.transform = "scale(1)";
  e.target.parentElement.parentElement.style.border = "none";
  e.target.parentElement.parentElement.style.zIndex = "auto";
  e.target.src = e.target.src.replace(PLAYKEY, PAUSEKEY);
}
