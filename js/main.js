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

    columnIndex구하기();
    rowIndex구하기();

    for (let i = 0; i < rowIndex; i++) {
      for (let j = 0; j < columnIndex; j++) {
        var content = `<div class="content">
      <div class="content-img">
        <iframe
          src=${videoArray[cnt2].source}
          title=${videoArray[cnt2].title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
            <span class="content-title"
              >${videoArray[cnt2].title}</span
            >
            <span class="content-channel">${videoArray[cnt2].channel}</span>
            <div class="content-info-second">
              <span>${videoArray[cnt2].view}</span>
              <span>${videoArray[cnt2].date}</span>
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

    // zoomIn zoomOut 추가
    for (let i = 0; i < videoCount; i++) {
      document
        .querySelectorAll("iframe")
        [i].addEventListener("mouseenter", zoomIn);

      document
        .querySelectorAll("iframe")
        [i].addEventListener("mouseleave", zoomOut);
    }
  });

function columnIndex구하기() {
  if (window.innerWidth > 1600) {
    columnIndex = 4;
  } else if (window.innerWidth > 350 * 3 + 200) {
    columnIndex = 3;
  } else {
    columnIndex = 2;
  }
}

function rowIndex구하기() {
  if (videoCount % columnIndex === 0) {
    rowIndex = parseInt(videoCount / columnIndex);
  } else {
    rowIndex = parseInt(videoCount / columnIndex) + 1;
  }

  var content_row = `<div class="content-row"></div>`;
  for (let i = 0; i < rowIndex; i++) {
    document
      .querySelector(".content-container")
      .insertAdjacentHTML("beforeend", content_row);
  }
}
