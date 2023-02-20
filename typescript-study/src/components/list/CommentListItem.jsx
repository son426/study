import React from "react";

const CommentListItem = (props) => {
  const { comment } = props;

  return <div>{comment.content}</div>;
};

export default CommentListItem;
