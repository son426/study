const TABBUTTONCLASS = "tab-button";
const TABCONTENTCLASS = "tab-content";
const TABBUTTONKEY = "orange";
const SHOWKEY = "show2";

for (let i = 0; i < 3; i++) {
  document
    .querySelectorAll(`.${TABBUTTONCLASS}`)
    [i].addEventListener("click", function () {
      for (let j = 0; j < 3; j++) {
        document
          .querySelectorAll(`.${TABBUTTONCLASS}`)
          [j].classList.remove(TABBUTTONKEY);
      }
      for (let j = 0; j < 3; j++) {
        document
          .querySelectorAll(`.${TABCONTENTCLASS}`)
          [j].classList.remove(SHOWKEY);
      }
      document
        .querySelectorAll(`.${TABBUTTONCLASS}`)
        [i].classList.add(TABBUTTONKEY);
      document
        .querySelectorAll(`.${TABCONTENTCLASS}`)
        [i].classList.add(SHOWKEY);
    });
}
