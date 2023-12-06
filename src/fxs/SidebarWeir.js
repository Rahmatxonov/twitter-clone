import React from "react";
import "./Sidebar.scss";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "../components/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNone";
import MessagesIcon from "@material-ui/icons/MailOutline";
import BookmarksIcon from "@material-ui/icons/BookmarkBorder";
import ListsIcon from "@material-ui/icons/ListAlt";
import ProfileIcon from "@material-ui/icons/PermIdentity";
import MoreIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationIcon} text="Notifications" />
      <SidebarOption Icon={MessagesIcon} text="Messages" />
      <SidebarOption Icon={BookmarksIcon} text="Bookmarks" />
      <SidebarOption Icon={ListsIcon} text="Lists" />
      <SidebarOption Icon={ProfileIcon} text="Profile" />
      <SidebarOption Icon={MoreIcon} text="More" />

      <Button variant="outlined" className="sidebar__tweetBtnt" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
