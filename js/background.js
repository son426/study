// const bgImg = ["1.jpg", "2.jpg", "3.jpg"];
const bgImg = ["3.jpg"];

const image = document.createElement("img");

const indexSelcted2 = Math.floor(Math.random() * bgImg.length);
const imgSelected = bgImg[indexSelcted2];

image.src = `img/${imgSelected}`;
// document.body.appendChild(img);
document.body.appendChild(image);
