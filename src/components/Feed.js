import React, { useState, useEffect } from "react";
import "./Feed.scss";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="feed__header__title">Home</h2>
      </div>
      <TweetBox />
      <Post />
    </div>
  );
};

export default Feed;
