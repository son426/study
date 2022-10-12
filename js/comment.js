const comment = document.querySelector(".comment");
const commentForm = document.querySelector(".comment_write form");
const commentInput = document.querySelector(".comment_write input");

let commentCnt = 0;

// 처음에 댓글창 그려줘
// 댓글 0개인 상태

commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  commentCnt++;

  // 댓글 작성된거 화면에 띄워주기.
  var commentHTML = `
  <li>
    <img class="comment_profile" src="img/profile2.jpg" />
    <div class="comment_text">
      <div class="comment_row">
        <span>코리안 사운드</span>
        <span>2일 전(수정됨)</span>
      </div>
      <div class="comment_row">
        <span>${commentInput.value}</span>
      </div>
      <div class="comment_row">
        <i class="far fa-thumbs-up"></i>
        <span class="up-num">8</span>
        <i class="far fa-thumbs-down"></i>
        <span class="down-num">3</span>
      </div>
    </div>
  </li>
`;
  comment
    .querySelector(".comment_list ul")
    .insertAdjacentHTML("beforeend", commentHTML);

  commentInput.value = "";

  // 댓글 갯수 반영
  document.querySelector(
    ".comment_header span"
  ).innerHTML = `댓글 ${commentCnt}개`;

  // 좋아요 버튼
  따봉업다운();
});
