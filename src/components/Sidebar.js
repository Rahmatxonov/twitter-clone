import React from "react";
import SidebarOption from "./SidebarOption";
import "./Sidebar.scss";
import twitterLogo from "../images/icon/twitter-logo.svg";
import HomeIcon from "../images/icon/Home.svg";
import ExploreIcon from "../images/icon/Explore.svg";
import NotificationIcon from "../images/icon/Notification.svg";
import MessagesIcon from "../images/icon/Messages.svg";
import BookmarksIcon from "../images/icon/Bookmarks.svg";
import ListsIcon from "../images/icon/lists.svg";
import ProfileIcon from "../images/icon/Profile.svg";
import MoreIcon from "../images/icon/more.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
      <img className="sidebar__logo" src={twitterLogo} alt="twitterlogo" />
      {/* SidebarOption */}
      <SidebarOption active icon={HomeIcon} text="Home" />
      <SidebarOption icon={ExploreIcon} text="Explore" />
      <SidebarOption icon={NotificationIcon} text="Notifications" />
      <SidebarOption icon={MessagesIcon} text="Messages" />
      <SidebarOption icon={BookmarksIcon} text="Bookmarks" />
      <SidebarOption icon={ListsIcon} text="Lists" />
      <SidebarOption icon={ProfileIcon} text="Profile" />
      <SidebarOption icon={MoreIcon} text="More" />
      {/* button tweet */}
      <button className="sidebar__tweetBtn">Tweet</button>
      {/* SidebarOption */}
      {/* SidebarOption */}
      {/* Button -> Tweet */}
    </div>
  );
};

export default Sidebar;
