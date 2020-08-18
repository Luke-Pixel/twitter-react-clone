import React, {useState, useEffect} from 'react';
import './TweetBox.css';
import {Avatar, Button} from '@material-ui/core';
import db from './firebase'

function TweetBox() {

const [tweetMessage, setTweetMessage] = useState("")
const [tweetImage, setTweetImage] = useState("")

const sendTweet = event => {
    event.preventDefault();
    db.collection('posts').add({
        displayName: 'Luke Tyson',
        username: 'Lukeool',
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: 'https://pbs.twimg.com/profile_images/378800000007559189/511f2c7f6d4abdad8dbfe35187cf5dc3_400x400.jpeg'
    })
    setTweetMessage("")
    setTweetImage("")
}

    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox_input">
                    <Avatar 
                    src='https://pbs.twimg.com/profile_images/378800000007559189/511f2c7f6d4abdad8dbfe35187cf5dc3_400x400.jpeg' 
                    />
                    <input 
                    onChange={event => setTweetMessage(event.target.value)} 
                    value={tweetMessage} 
                    placeholder="What's happening?" 
                    type='text' 
                    />
                </div>

                <input 
                onChange={event => setTweetImage(event.target.value)}
                value={tweetImage} 
                className='tweetBox_imageInput' 
                placeholder='Enter image URL' 
                type='text' 
                />

                <Button onClick={sendTweet} type='submit' className='tweetBox_button'>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
