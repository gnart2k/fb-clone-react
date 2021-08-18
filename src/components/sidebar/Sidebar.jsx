import React from "react";
import "../styles/Sidebar.css";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";
import BookmarkOutlinedIcon from "@material-ui/icons/BookmarkOutlined";
import VideogameAssetOutlinedIcon from "@material-ui/icons/VideogameAssetOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { Button, Avatar } from "@material-ui/core";
function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="Sidebar__users">
        <Avatar />
        <h4>Gnart</h4>
      </div>
      <button type="button" className="Sidebar__button">
        <div className="Sidebar__shortcuts">
          <EventAvailableOutlinedIcon className="Sidebar__icon" />
          <p>Sự kiện</p>
        </div>
      </button>
      <button type="button" className="Sidebar__button">
        <div className="Sidebar__shortcuts">
          <BookmarkOutlinedIcon className="Sidebar__icon" />
          <p>Đã lưu</p>
        </div>
      </button>
      <button type="button" className="Sidebar__button">
        <div className="Sidebar__shortcuts">
          <VideogameAssetOutlinedIcon className="Sidebar__icon" />
          <p>Trò chơi</p>
        </div>
      </button>
      <button type="button" className="Sidebar__button">
        <div className="Sidebar__shortcuts">
          <HelpOutlineOutlinedIcon className="Sidebar__icon" />
          <p>Trợ giúp</p>
        </div>
      </button>
      <button type="button" className="Sidebar__button">
        <div className="Sidebar__shortcuts">
          <SettingsOutlinedIcon className="Sidebar__icon" />
          <p>Cài đặt</p>
        </div>
      </button>
      <button type="button" className="Sidebar__button">
        <div className="Sidebar__shortcuts">
          <ExpandMoreOutlinedIcon className="Sidebar__icon" />
          <p>Xem thêm</p>
        </div>
      </button>
    </div>
  );
}

export default Sidebar;
