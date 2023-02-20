import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom/dist";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import data from "../../data.json";
import styles from "../../css/PostWritePage.module.css";

const PostWritePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>포스트write 페이지</h1>
          <TextInput />
          {/* TextInput에다가 props 내려줘야하는데, 이게 안먹음. 그냥 무조건 기본으로 들어감. */}
          <Button
            title="작성완료"
            onClick={() => {
              navigate(`/`);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default PostWritePage;
