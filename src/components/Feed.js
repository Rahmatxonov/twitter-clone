import React, { useState, useEffect } from "react";
import "../sass/Feed.scss";
import TweetBox from "./TweetBox";
import Post from "./Post";
import starIcon from "..//images/icon/starlogo.svg";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="feed__header__title">Home</h2>
        <img src={starIcon} alt="star" />
      </div>
      <TweetBox />
      <Post />
    </div>
  );
};

export default Feed;
