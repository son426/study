// 화면이 넓어지면, row에 4개를 띄우고
// 좁아지면 세개를 띄우고 하는 코드

// 그러면 row에 content 미리 박아놓으면 안되겠네.
// row만 박아놓고.
// 자바스크립트에서 화면 크기 따라서 content 박아넣어야겠네.

// container만 남겨두고 row도 박아넣어야겠네.
// 일단 row 하나 넣어놓고 content 박아넣는거 먼저 해보자.
// 데이터 받아와서
//   video에 접근
//   video 요소 foreach
//     하나씩 그려넣기.

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

    // 윈도우 창 크기 바뀌면, 한줄에 넣는 갯수 달라지게.
    window.addEventListener("resize", function () {
      cnt2 = 0;
      document.querySelector(".content-container").innerHTML = "";
      videoPaint();
    });

    // zoomIn zoomOut 추가
    for (let i = 0; i < videoCount; i++) {
      document
        .querySelectorAll("iframe")
        [i].addEventListener("mouseenter", zoomIn);

      document
        .querySelectorAll("iframe")
        [i].addEventListener("mouseleave", zoomOut);

      document
        .querySelectorAll(".content")
        [i].addEventListener("click", function () {
          window.location = "video.html";
        });
    }
  });

function videoPaint() {
  columnIndex구하기();
  rowIndex구하기();

  var content_row = `<div class="content-row"></div>`;
  for (let i = 0; i < rowIndex; i++) {
    document
      .querySelector(".content-container")
      .insertAdjacentHTML("beforeend", content_row);
  }

  for (let i = 0; i < rowIndex; i++) {
    for (let j = 0; j < columnIndex; j++) {
      var content = `<div class="content">
    <div class="content-img">
      <iframe
        src=${videoArray[cnt2].source}
        title=${videoArray[cnt2].title}
        frameborder="0"
        allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="content-info">
      <div class="content-info_profile">
        <img
          class="content-info_img"
          src=${videoArray[cnt2].img_source}
        />
      </div>
      <div class="content-info_text">
        <div class="content-info-first">
          <span class="title"
            >${videoArray[cnt2].title}</span
          >
          <span class="channel">${videoArray[cnt2].channel}</span>
          <div class="content-info-second">
            <span class="view">${videoArray[cnt2].view}</span>
            <span class="date">${videoArray[cnt2].date}</span>
          </div>
        </div>
      </div>
    </div>
    </div>`;
      document
        .querySelectorAll(".content-row")
        [i].insertAdjacentHTML("beforeend", content);
      cnt2++;
      if (cnt2 === videoCount) {
        break;
      }
    }
    if (cnt2 === videoCount) {
      break;
    }
  }
}

function columnIndex구하기() {
  const contentWidth = 400;
  columnIndex = parseInt(window.innerWidth / contentWidth);
}

function rowIndex구하기() {
  if (videoCount % columnIndex === 0) {
    rowIndex = parseInt(videoCount / columnIndex);
  } else {
    rowIndex = parseInt(videoCount / columnIndex) + 1;
  }
}
