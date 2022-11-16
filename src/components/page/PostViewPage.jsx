import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom/dist";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import data from "../../data.json";

const PostViewPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>포스트View 페이지</h1>
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        홈으로
      </button>
      <PostList posts={data} content={true} />
    </>
  );
};

export default PostViewPage;
