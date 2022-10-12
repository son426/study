let videoArray = [];
let videoCount = 0;
let rowIndex = 0;
let columnIndex = 0;
let cnt2 = 0;

fetch("video.json")
  .then((response) => response.json())
  .then((data) => {
    videoArray = data.videos;
    videoCount = videoArray.length;

    videoPaint();

    for (let i = 0; i < videoCount; i++) {
      document
        .querySelectorAll(".content")
        [i].addEventListener("click", function (e) {
          clickIndex = parseInt(
            e.currentTarget.querySelector("iframe").dataset.index
          );
          localStorage.setItem("input", clickIndex);
          window.location = "video.html";
        });
    }
  });

function videoPaint() {
  for (let i = 0; i < videoCount; i++, cnt2++) {
    var content = `
    <div class="content-row">
            <div class="content">
              <div class="img">
                <iframe
                  src="${videoArray[cnt2].source}"
                  title="${videoArray[cnt2].title}"
                  frameborder="0"
                  allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  data-index = ${videoArray[cnt2].index}
                ></iframe>
              </div>
              <div class="info">
                <div class="title">
                  <span>${videoArray[cnt2].title}</span>
                </div>
                <div class="view_date">
                  <span class="view">${videoArray[cnt2].view},</span>
                  <span class="date">${videoArray[cnt2].date}</span>
                </div>
                <div class="channel">
                  <img src="${videoArray[cnt2].img_source}" alt="" />
                  <span>${videoArray[cnt2].channel}</span>
                </div>
                <div class="subtext">
                  <span>DRX MEMBERSHIP ~~~ fighting</span>
                </div>
              </div>
            </div>
          </div>`;
    document
      .querySelector(".content-container")
      .insertAdjacentHTML("beforeend", content);
  }
}
