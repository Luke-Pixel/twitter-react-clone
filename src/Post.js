import React, {forwardRef}from 'react';
import './Post.css';
import {Avatar, Button} from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUserRounded'
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";


const Post = forwardRef( ({displayName, username,verified,timestamp, text,image,avatar}, ref) => {
    return (
        <div className='post' ref={ref}>
            <div className="post_avatar">
                <Avatar src={avatar}/>
            </div>

            <div className="post_body">
                <div className="post_header">
                    <div className="header_text">
                        <h3 className='post_person'>
                            {displayName}
                        </h3>
                        <span className='post_headerSpecial'>
                            {verified && <VerifiedUserIcon className='post_badge' /> } @{username} 
                        </span>
                    </div>
                    <div className="post_headerDesc">
                        <p>{text}</p>
                    </div>
                </div>
                <img className='post_image' src={image} />
                <div className="post_footer">
                    <ChatBubbleOutlineIcon fontSize='small'/>
                    <RepeatIcon fontSize='small'/>
                    <FavoriteBorderIcon fontSize='small' />
                    <PublishIcon fonstSize='small'/>
                </div>
            </div>
            
        </div>
    )
}
)
export default Post;
