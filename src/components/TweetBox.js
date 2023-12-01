import React from "react";
import "./TweetBox.scss";
import imageIcon from "../images/icon/image.svg";
import gifIcon from "../images/icon/gif.svg";
import statsIcon from "../images/icon/stats.svg";
import smileIcon from "../images/icon/smile.svg";
import scheduleIcon from "../images/icon/schedule.svg";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__inputBox">
          <img
            className="tweetBox__img"
            src="https://www.imagdisplays.co.uk/wp-content/uploads/2021/04/PHOTO-2020-08-13-16-07-05.jpg"
          />
          <input
            className="tweetBox__input"
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <div className="tweets">
          <span className="tweets__span">
            <img src={imageIcon} alt="image" />
            <img src={gifIcon} alt="image" />
            <img src={statsIcon} alt="image" />
            <img src={smileIcon} alt="image" />
            <img src={scheduleIcon} alt="image" />
          </span>
          {/* <input
            className="tweetBox__url"
            placeholder="Optional: enter image URL"
          /> */}
          <button className="tweetBox__btn">Tweet</button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
