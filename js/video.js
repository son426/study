let videoArray = [];
let input = localStorage.getItem("input");

fetch("video.json")
  .then((response) => response.json())
  .then((data) => {
    videoArray = data.videos;
    if (window.innerWidth >= 1015) {
      var content = `<iframe
      src=https://www.youtube-nocookie.com/embed/EP65TL0Ff4c?autoplay=1&mute=1
      title=수업 때마다 졸던 학생이 있었어요
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>`;
      document
        .querySelector(".video_wrap")
        .insertAdjacentHTML("beforeend", content);
      document.querySelector(".main_small").classList.add("hidden");

      document
        .querySelector(".recommend_video li")
        .addEventListener("click", function () {
          window.location = "video.html";
        });
    } else {
      document.querySelector(".main_big").classList.add("hidden");
    }
  });

window.addEventListener("resize", function () {
  if (window.innerWidth < 1015) {
    document.querySelector(".main_big").classList.add("hidden");
    document.querySelector(".main_small").classList.remove("hidden");
  } else {
    document.querySelector(".main_big").classList.remove("hidden");
    document.querySelector(".main_small").classList.add("hidden");
  }
});
