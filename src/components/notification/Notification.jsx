import React from 'react'
import "../styles/Notification.css"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Avatar} from '@material-ui/core'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';

function Notification() {
    return (
        <div className="Notification">
            <div className="Pages">
                <div className="Pages__title">
                    <h3>Trang của bạn</h3>
                    <MoreHorizIcon/>
                </div>
                <div className="Pages__info">
                    <Avatar/>
                    <h4>ten trang</h4>
                </div>
            </div>
            <hr/>
            <div className="Friends">
                <div className="Friend__title">
                    <h3>Người liên hệ</h3>
                    <div className="Friends__icons">
                        <VideoCallIcon/>
                        <SearchIcon/>
                        <MoreHorizIcon/>
                    </div>
                </div>
                <div className="Friends__info">
                    <Avatar/>
                    <h4>Some body</h4>
                </div>
                <div className="Friends__info">
                    <Avatar/>
                    <h4>Some body</h4>
                </div>
                <div className="Friends__info">
                    <Avatar/>
                    <h4>Some body</h4>
                </div>
            </div>
        </div>
    )
}

export default Notification
