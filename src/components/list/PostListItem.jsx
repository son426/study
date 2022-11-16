import React from "react";

const PostListItem = (props) => {
  const { post, onClick, content } = props;

  return (
    <>
      <h3 onClick={onClick}>{post.title}</h3>
      {content && <p>{post.content}</p>}
    </>
  );
};

export default PostListItem;
