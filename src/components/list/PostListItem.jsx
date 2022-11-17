import React from "react";
import styles from "../../css/PostListItem.module.css";

const PostListItem = (props) => {
  const { post, onClick, content } = props;

  return (
    <>
      <div className={styles.postItem}>
        <h3 onClick={onClick}>{post.title}</h3>
        {content && <p className={styles.postTitle}>{post.content}</p>}
      </div>
    </>
  );
};

export default PostListItem;
