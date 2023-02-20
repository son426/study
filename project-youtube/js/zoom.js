const PLAYKEY = "?autoplay=1&mute=1";
const PAUSEKEY = "?autoplay=0&mute=0";

// function videoZoomIn(e) {
//   e.target.parentElement.parentElement.style.transform = "scale(1.1)";
//   e.target.parentElement.parentElement.style.border = "1px black solid";
//   e.target.parentElement.parentElement.style.zIndex = 1;
//   if (e.target.src.includes(PAUSEKEY)) {
//     e.target.src = e.target.src.replace(PAUSEKEY, PLAYKEY);
//   } else {
//     e.target.src += PLAYKEY;
//   }
// }

// function videoZoomOut(e) {
//   e.target.parentElement.parentElement.style.transform = "scale(1)";
//   e.target.parentElement.parentElement.style.border = "none";
//   e.target.parentElement.parentElement.style.zIndex = "auto";
//   e.target.src = e.target.src.replace(PLAYKEY, PAUSEKEY);
// }

function videoZoomIn(e) {
  const videoNode = e.currentTarget.childNodes[1].firstElementChild;
  zoomIn(e);
  if (videoNode.src.includes(PAUSEKEY)) {
    videoNode.src = videoNode.src.replace(PAUSEKEY, PLAYKEY);
  } else {
    videoNode.src += PLAYKEY;
  }
}

function videoZoomOut(e) {
  const videoNode = e.currentTarget.childNodes[1].firstElementChild;
  zoomOut(e);
  videoNode.src = videoNode.src.replace(PLAYKEY, PAUSEKEY);
}

function zoomIn(e) {
  e.currentTarget.style.transform = "scale(1.1)";
  e.currentTarget.style.zIndex = 1;
}

function zoomOut(e) {
  e.currentTarget.style.transform = "scale(1.0)";
  e.currentTarget.style.zIndex = "auto";
}
