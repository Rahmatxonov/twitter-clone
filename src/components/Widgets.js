import React from "react";
import "../sass/Widgets.scss";
import "../sass/mixin.scss";

import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
const Widgets = () => {
  return (
    <div className="Widgets">
      <div className="Widgets__inputBox">
        <SearchIcon className="Widgets__searchIcon" />
        <input
          className="Widgets__inputBox__input"
          type="text"
          placeholder="Search Twitter"
        />
      </div>
      <div className="Widgets__widgetContainer">
        <h2 className="Widgets__widgetContainer__title">What's happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="reactjs"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://facebook.com/reactjs"}
          options={{ text: "#reactjs is awesome", via: "Rahmatxonov" }}
        />
      </div>
    </div>
  );
};

export default Widgets;
