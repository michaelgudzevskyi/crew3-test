import React from "react";
import { CommentContent } from "../../components";
import avatar from "../../assets/images/avatar.png";

export const CommentPointer = () => {
  return (
    <div className="comment">
      <div className="comment__container">
        <div className="comment__avatar">
          <img src={avatar} alt="user avatar" />

          <CommentContent />
        </div>
      </div>
    </div>
  );
};
