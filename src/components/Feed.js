import React, { useState, useEffect } from "react";
import "./Feed.scss";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2 className="feed__header__title">Home</h2>
      </div>
      <TweetBox />
      <Post
        displayName="Rahmatxonov Xasanxon"
        username="Rahmatxonov"
        verified={true}
        text="hello working"
        avatar="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
        image="https://media0.giphy.com/media/nDSlfqf0gn5g4/giphy.gif"
      />
    </div>
  );
};

export default Feed;
