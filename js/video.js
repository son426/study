let videoArray = [];

fetch("video.json")
  .then((response) => response.json())
  .then((data) => {
    videoArray = data.videos;
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
  });
