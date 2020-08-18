import React from 'react';
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';
import {
    TwitterShareButton,
    TwitterTweetEmbed,
    TwitterTimelineEmbed,
} from 'react-twitter-embed';

function Widgets() {
    return (
        <div className='widgets'>

            <div className="widgets_input">
               <SearchIcon className='widgets_searchIcon'/> 
               <input placeholder='Search Twitter' type='text'/>
            </div>
            
            <div className="widgets_container">
                <h2>Whats Happening</h2>
                <TwitterTweetEmbed tweetId={'1293154394058432512'}/>
                <TwitterTimelineEmbed 
                    sourceType='profile'
                    screenName='reactjs'
                    options={{height: 400}}
                />

                
            </div>
        </div>
    )
}

export default Widgets;
