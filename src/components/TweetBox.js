import React, { useState } from "react";
import "../sass/TweetBox.scss";
import { Avatar, Button } from "@mui/material";
// import db from "./firebase";
import imageIcon from "../images/icon/image.svg";
import gifIcon from "../images/icon/gif.svg";
import statsIcon from "../images/icon/stats.svg";
import smileIcon from "../images/icon/smile.svg";
import scheduleIcon from "../images/icon/schedule.svg";
import ProfilePic from "../images/icon/ProfilePic.svg";

const TweetBox = () => {
  const [tweetMassage, setTweetMassages] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__inputBox">
          <Avatar className="tweetBox__img" src={ProfilePic} />
          <input
            onChange={(e) => setTweetMassages(e.target.value)}
            value={tweetMassage}
            className="tweetBox__input"
            placeholder="What's happening?"
          />
          <Button onClick={sendTweet} type="submit" className="tweetBox" />
        </div>
        <div className="tweets">
          <span className="tweets__span">
            <img src={imageIcon} alt="image" />
            <img src={gifIcon} alt="image" />
            <img src={statsIcon} alt="image" />
            <img src={smileIcon} alt="image" />
            <img src={scheduleIcon} alt="image" />
          </span>
          <button className="tweetBox__btn">Tweet</button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
