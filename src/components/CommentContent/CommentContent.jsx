import React from "react";

export const CommentContent = () => {
  return (
    <div className="wrapper">
      <div className="wrapper__preview">
        <span className="username">Mykhailo Hudzevatyi</span>{" "}
        <small className="time">42 hr. ago</small>
        <div className="message">My comments </div>
      </div>
    </div>
  );
};
