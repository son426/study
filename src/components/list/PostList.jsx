import React from "react";
import PostListItem from "./PostListItem";

const PostList = (props) => {
  const { posts, onClickItem, content } = props;

  return (
    <div onClick={onClickItem}>
      {posts.map((post, index) => {
        return (
          <PostListItem
            key={post.id}
            post={post}
            onClick={() => {
              onClickItem(post);
            }}
            content={content}
          />
        );
      })}
    </div>
  );
};

export default PostList;
