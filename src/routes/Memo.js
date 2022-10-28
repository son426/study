import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import "./Memo.css";

function Memo() {
  const [글제목, set글제목] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);

  const [따봉, set따봉] = useState(0);

  const 클릭함수 = () => {
    set따봉((prev) => prev + 1);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "25px" }}>블로그임</h4>
      </div>
      <div className="list">
        <h4>
          {글제목[0]} <span onClick={클릭함수}>👍</span> {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          set글제목(copy);
        }}
      >
        버튼
      </button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          set글제목(copy);
        }}
      >
        가나다순 정렬
      </button>
    </div>
  );
}

export default Memo;
