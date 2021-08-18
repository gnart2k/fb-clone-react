import React, { useState } from "react";
import "../styles/News.css";
import { Avatar } from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import ShareIcon from "@material-ui/icons/Share";
import Comments from "./Comments";
function News({ userName, avatarUrl, timeStamp, description, imgUrl }) {
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(false);
  const [likeStatus, setLikeStatus] = useState("News__disLike");
  const [commentsStatus, setCommentStatus] = useState(false);
  const handleComment = () => {
    setCommentStatus((prev) => !prev);
  };
  const handleLike = () => {
    setCount((prev) => prev + 1);
    setCheck((prev) => !prev);
    setLikeStatus("News__like");
  };
  const handleDislike = () => {
    setCount((prev) => prev - 1);
    setCheck((prev) => !prev);
    setLikeStatus("News__disLike");
  };
  return (
    <div className="News">
      <div className="News__cards_users">
        <Avatar src={avatarUrl} />
        <h3>{userName}</h3>
        <h5>{timeStamp}</h5>
        <PublicIcon className="News__icons" />
      </div>
      <div className="News__cards">
        <p> {description}</p>
        <img src={imgUrl} />
      </div>
      <div className="News__cards_count">
        <div className="left">
          <div className="News__card_count_like">
            <div className="likeIcon_button">
              <ThumbUpIcon className="likeIcon" />
            </div>
            <p>&nbsp;{count}</p>
          </div>
        </div>
        <div className="right">
          <div className="News__card_count_comment">
            <p>56 </p>
            <p>&nbsp;binh luan</p>
          </div>
          <div className="News__card_count_share">
            <p>56 </p>
            <p>&nbsp;luot chia se</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="News__buttons">
        <button
          onClick={check ? handleDislike : handleLike}
          className={likeStatus}
        >
          <ThumbUpAltOutlinedIcon />
          <h5>Thich</h5>
        </button>
        <button className="News__button" onClick={handleComment}>
          <QuestionAnswerIcon />
          <h5>Binh luan</h5>
        </button>
        <div className="News__button">
          <ShareIcon />
          <h5>Chia se</h5>
        </div>
      </div>
      {commentsStatus && <Comments />}
    </div>
  );
}

export default News;
