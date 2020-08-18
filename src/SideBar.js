import React from 'react';
import './SideBar.css'
import TwitterIcon from '@material-ui/icons/Twitter'
import SideBarOption from './SideBarOption'
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import {Button} from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';

function SideBar() {
    return (
        <div className='sidebar'>
            {/* icon */}
            <TwitterIcon className='sidebar_twitterIcon'/>
            <SideBarOption active Icon={HomeIcon}text='Home' />
            <SideBarOption Icon={SearchIcon} text ='Explore'/>
            <SideBarOption Icon={NotificationsNoneIcon}text='Notifications'/>
            <SideBarOption Icon={MailOutlineIcon} text='Mail'/>
            <SideBarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SideBarOption Icon={ListAltIcon} text="Lists"/>
            <SideBarOption Icon={PermIdentityIcon} text='Profile'/>
            <SideBarOption Icon={MoreHorizIcon} text='More'/>

            <Button variant='outlined' className='sidebar_tweet' fullWidth>Tweet</Button>
            <Button variant='outlined' className='sidebar_tweet_small' fullWidth><SideBarOption Icon = {CreateIcon} /></Button>
        </div>
    )
}

export default SideBar;
