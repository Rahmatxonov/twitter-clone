// import React from "react";
// import SidebarOption from "./SidebarOption";
// import "./Sidebar.scss";
// import twitterLogo from "../images/icon/twitter-logo.svg";
// import HomeIcon from "../images/icon/Home.svg";
// import ExploreIcon from "../images/icon/Explore.svg";
// import NotificationIcon from "../images/icon/Notification.svg";
// import MessagesIcon from "../images/icon/Messages.svg";
// import BookmarksIcon from "../images/icon/Bookmarks.svg";
// import ListsIcon from "../images/icon/lists.svg";
// import ProfileIcon from "../images/icon/Profile.svg";
// import MoreIcon from "../images/icon/more.svg";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <img className="sidebar__logo" src={twitterLogo} alt="twitterlogo" />
//       <SidebarOption active icon={HomeIcon} text="Home" />
//       <SidebarOption icon={ExploreIcon} text="Explore" />
//       <SidebarOption icon={NotificationIcon} text="Notifications" />
//       <SidebarOption icon={MessagesIcon} text="Messages" />
//       <SidebarOption icon={BookmarksIcon} text="Bookmarks" />
//       <SidebarOption icon={ListsIcon} text="Lists" />
//       <SidebarOption icon={ProfileIcon} text="Profile" />
//       <SidebarOption icon={MoreIcon} text="More" />
//       <button className="sidebar__tweetBtn" variant="outlined" fullWidth>
//         Tweet
//       </button>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import "./Sidebar.scss";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
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
