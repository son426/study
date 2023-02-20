let videoArray = [];
let input = localStorage.getItem("input");

const AUTOPLAYKEY = "?autoplay=1&mute=1";

fetch("video.json")
  .then((response) => response.json())
  .then((data) => {
    videoArray = data.videos;

    // 비디오 소스에 자동재생 코드 붙여줘.
    let videoArraySource = videoArray[input].source + AUTOPLAYKEY;

    // 컴퓨터 화면과 모바일 화면 두개로 분할
    if (window.innerWidth >= 1015) {
      //비디오 컨텐츠 그려줘.
      var content = `<div class="video_wrap">
      <iframe
  src="${videoArraySource}
  title="${videoArray[input].title}"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  data-index = ${videoArray[input].index}
  ></iframe>
    </div>
    <div class="meta">
      <div class="meta_row meta_video">
        <div class="meta_title_wrap">
          <span class="meta_hashtag">#노래추천 #플레이리스트 #감성</span>
          <span class="meta_title"
            >${videoArray[input].title}</span
          >
        </div>
        <div class="meta_text_icons">
          <div class="meta_text">
            <span class="view">${videoArray[input].view}</span>
            <span class="date">${videoArray[input].date}</span>
          </div>
          <div class="meta_icons">
            <i class="far fa-thumbs-up"><span class="up-num">8</span></i>
            <i class="far fa-thumbs-down"><span class="down-num">3</span></i>
            <i class="fas fa-share"><span>공유</span></i>
            <i class="fas fa-download"><span>오프라인 저장</span></i>
            <i class="fas fa-cut"><span>클립</span></i>
            <i class="fas fa-folder-plus"><span>저장</span></i>
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
      </div>
      <div class="meta_row meta_channel">
        <div class="meta_channel_row">
          <div class="meta_profile_img"><img src="${videoArray[input].img_source}" /></div>
          <div class="meta_profile_text">
            <div class="channel-name">${videoArray[input].channel}</div>
            <div class="subscribe-num">구독자 79명</div>
          </div>
          <div class="subscribe">
            <button>구독</button>
          </div>
        </div>
        <div class="meta_channel_row">
          <div class="meta_profile_img"></div>
          <div class="meta_profile_text2">
            <span>영상 자세한 설명을 여기 쓰면 돼.</span>
          </div>
          <div class="subscribe"></div>
        </div>
      </div>
    </div>`;

      document
        .querySelector(".main_big .column:first-child")
        .insertAdjacentHTML("afterbegin", content);
      document.querySelector(".main_small").classList.add(HIDDENKEY);

      // 추천동영상에도 링크 이동 달아주기.
      document
        .querySelector(".recommend_video li")
        .addEventListener("click", function () {
          window.location = "video.html";
        });
    } else {
      document.querySelector(".main_big").classList.add(HIDDENKEY);
    }

    // 따봉버튼 이벤트
    따봉업다운("meta_icons");

    // 구독버튼 이벤트
    const btnSubscribe = document.querySelector(".subscribe button");
    btnSubscribe.addEventListener("mouseenter", zoomIn);
    btnSubscribe.addEventListener("mouseleave", zoomOut);
    btnSubscribe.addEventListener("click", function () {
      btnSubscribe.classList.toggle("subscribe_ing");
    });
  });

// 창 크기 조절할때마다, 큰화면 작은화면 적용되게.

window.addEventListener("resize", function () {
  if (window.innerWidth < 1015) {
    document.querySelector(".main_big").classList.add(HIDDENKEY);
    document.querySelector(".main_small").classList.remove(HIDDENKEY);
  } else {
    document.querySelector(".main_big").classList.remove(HIDDENKEY);
    document.querySelector(".main_small").classList.add(HIDDENKEY);
  }
});
