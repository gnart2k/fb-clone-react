import React from "react";
import "../styles/Feeling.css";
import { Avatar, Button } from "@material-ui/core";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ImageIcon from '@material-ui/icons/Image';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

function Feeling() {
  return (
    <div className="Feeling">
      <div className="Feeling__input">
        <Avatar className="Feeling__avatar" />
        <input type="text" placeholder="bạn đang nghĩ gì ?" />
      </div>
      <hr />
      <div className="Feeling__actions">
        <Button>
          <VideoCallIcon className = "VideoCallIcon"/>
          <h4 className="Feeling__actions_text">Video trực tiếp</h4>
        </Button >
        <Button>
          <ImageIcon className = "ImageIcon"/>
          <h4 className="Feeling__actions_text">Ảnh/Video</h4>
        </Button>
        <Button>
          <EmojiEmotionsIcon className = "EmojiEmotionsIcon"/>
          <h4 className="Feeling__actions_text">Cảm xúc/Hoạt động</h4>
        </Button>
      </div>
    </div>
  );
}

export default Feeling;
