import React from "react";
import PostListItem from "./PostListItem";
import styles from "../../css/PostList.module.css";

const PostList = (props) => {
  const { posts, onClickItem, content } = props;

  return (
    <div className={styles.wrapper} onClick={onClickItem}>
      <header>
        <h3>글 목록</h3>
      </header>
      <body className={styles.postList}>
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
      </body>
    </div>
  );
};

export default PostList;
