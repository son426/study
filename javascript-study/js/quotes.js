const quotes = [
  {
    quote: "현실은 진실의 적이다.",
    author: "돈키호테",
  },
  {
    quote: "명언2",
    author: "작가2",
  },
  {
    quote: "명언3",
    author: "작가3",
  },
];
const randomNum = Math.floor(Math.random() * quotes.length);
const quoteBox = document.querySelector(".clock");

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

quote.innerText = quotes[randomNum].quote;
author.innerText = quotes[randomNum].author;
