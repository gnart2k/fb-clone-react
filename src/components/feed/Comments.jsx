import React from 'react'
import {Avatar} from '@material-ui/core'
import "./styles/Comments.css"
function Comments() {
    return (
        <div className = "comments">
            <hr/>
            <div className="comments__input">
                <Avatar className = "comments__avatar"/>
                <div className="comments__input_box">
                    <input type = "text" placeholder = "viết bình luận"/>
                </div>
            </div>
            <div className="comments__cards">
                <Avatar  className = "comments__avatar"/>
                <div className="comments__box">
                    <h5>Gnart</h5>
                    <p>th</p>
                </div>
            </div>
        </div>
    )
}

export default Comments
