import React from "react";
import { Navigate, useNavigate } from "react-router-dom/dist";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";
import styles from "../../css/MainPage.module.css";

const Mainpage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.header}>메인페이지</h1>
          <Button
            title="글 작성하기"
            onClick={() => {
              navigate("PostWrite");
            }}
          />
          <PostList
            posts={data}
            onClickItem={(item) => {
              navigate(`PostView`);
            }}
            content={false}
          />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
