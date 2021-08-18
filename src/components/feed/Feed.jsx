import React from 'react'
import '../styles/Feed.css'
import Story from './Story'
import Feeling from './Feeling'
import News from './News'
function Feed() {
    return (
        <div className = "Feed">
            <Story/>
            <Feeling/>
            <News 
            avatarUrl = "https://images.pexels.com/photos/4164086/pexels-photo-4164086.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
            userName = "trang"
            timeStamp = "2021"
            description="hehe"
            imgUrl = "https://images.pexels.com/photos/6774990/pexels-photo-6774990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
        </div>
    )
}

export default Feed
