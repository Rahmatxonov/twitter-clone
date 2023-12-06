import React from "react";
import "../sass/Sidebar.scss";
import twitterLogo from "../images/icon/twitter-logo.svg";
import HomeIcon from "../images/icon/Home.svg";
import ExploreIcon from "../images/icon/Explore.svg";
import NotificationIcon from "../images/icon/Notification.svg";
import MessagesIcon from "../images/icon/Messages.svg";
import BookmarksIcon from "../images/icon/Bookmarks.svg";
import ListsIcon from "../images/icon/lists.svg";
import ProfileIcon from "../images/icon/Profile.svg";
import MoreIcon from "../images/icon/more.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={twitterLogo} alt="twitterlogo" />
      <div className="navbar">
        <NavLink to="/home" active>
          <span className="iconTitle">
            <img className="twitterIcon" src={HomeIcon} />
            <p className="text">Home</p>
          </span>
        </NavLink>
        <NavLink to="/explore" active>
          <span className="iconTitle">
            <img className="twitterIcon" src={ExploreIcon} />
            <p className="text">Explore</p>
          </span>
        </NavLink>
        <NavLink to="/notifications" active>
          <span className="iconTitle">
            <img className="twitterIcon" src={NotificationIcon} />
            <p className="text">Notification</p>
          </span>
        </NavLink>
        <NavLink to="/massages" active>
          <span className="iconTitle">
            <img className="twitterIcon" src={MessagesIcon} />
            <p className="text">Messages</p>
          </span>
        </NavLink>
        <NavLink to="/bookmarks" active>
          <span className="iconTitle">
            <img className="twitterIcon" src={BookmarksIcon} />
            <p className="text">Bookmarks</p>
          </span>
        </NavLink>
        <NavLink to="/lists" active>
          <span className="iconTitle">
            <img className="twitterIcon" src={ListsIcon} />
            <p className="text">Lists</p>
          </span>
        </NavLink>
        <NavLink to="/profile" active>
          <span className="iconTitle">
            <img className="twitterIcon" src={ProfileIcon} />
            <p className="text">Profile</p>
          </span>
        </NavLink>
        <NavLink to="/more" active>
          <span className="iconTitle">
            <img className="twitterIcon" src={MoreIcon} alt="icon" />
            <p className="text">More</p>
          </span>
        </NavLink>
      </div>
      <button className="sidebar__tweetBtn" variant="outlined" fullWidth>
        Tweet
      </button>
    </div>
  );
};

export default Sidebar;
