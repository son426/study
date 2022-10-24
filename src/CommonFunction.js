export function zoomIn(event) {
  event.currentTarget.style.transform = "scale(1.1)";
}

export function zoomOut(event) {
  event.currentTarget.style.transform = "scale(1.0)";
}

export function profile_mouseIn(event) {
  zoomIn(event);
  event.currentTarget.style.border = "5px solid black";
}

export function profile_mouseOut(event) {
  zoomOut(event);
  event.currentTarget.style.border = "none";
}

export function button_mouseIn(event) {
  // event.currentTarget.style.border = "10px solid white";
  event.currentTarget.style.color = "white";
  event.currentTarget.style.backgroundColor = "black";
}

export function button_mouseOut(event) {
  event.currentTarget.style.border = "5px solid black";
  event.currentTarget.style.color = "black";
  event.currentTarget.style.backgroundColor = "white";
}
