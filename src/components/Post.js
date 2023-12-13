import { useEffect, useState } from "react";

function Post({ tweet_id, image, username, text, comments, retweets, likes }) {
  const [icons, setIcons] = useState({
    comments: false,
    retweets: false,
    likes: false,
  });

  const [iconValues, setIconValues] = useState({
    likes,
    comments,
    retweets,
  });

  useEffect(() => {
    if (localStorage.getItem(`post-${tweet_id}`)) {
      setIconValues(JSON.parse(localStorage.getItem(`post-${tweet_id}`)));
    }
    if (localStorage.getItem("likes")) {
      let likes = JSON.parse(localStorage.getItem("likes"));
      setIcons({ ...icons, likes: likes.includes((i) => i === tweet_id) });
    }
  }, []);

  function onClick(property) {
    let newObj = {
      ...icons,
      [property]: !icons[property],
    };
    let newValues = {
      ...iconValues,
      [property]: newObj[property]
        ? iconValues[property] + 1
        : iconValues[property] - 1,
    };
    if (!localStorage.getItem(property)) {
      localStorage.setItem(property, JSON.stringify([tweet_id]));
    }
    setIcons(newObj);
    setIconValues(newValues);
    localStorage.setItem(`post-${tweet_id}`, JSON.stringify(newValues));
  }

  return (
    <div className="post">
      <div className="post__content">
        <img src={image} alt="" />

        <div className="post__content__text">
          <h5>{username}</h5>
          <p>{text}</p>
        </div>
      </div>
      <div className="post__btns">
        <div
          class={`post-icon ${icons.comments && "green"}`}
          onClick={() => onClick("comments")}
        >
          <i class="fa-regular fa-comment"></i> {iconValues.comments}
        </div>
        <div
          class={`post-icon ${icons.retweets && "green"}`}
          onClick={() => onClick("retweets")}
        >
          <i class="fa-solid fa-retweet"></i> {iconValues.retweets}
        </div>
        <div
          class={`post-icon ${icons.likes && "post-icon-active"}`}
          onClick={() => onClick("likes")}
        >
          <i class="fa-solid fa-heart"></i> {iconValues.likes}
        </div>
        <i class="fa-solid fa-arrow-up-from-bracket"></i>
        <i class="fa-solid fa-chart-simple"></i>
      </div>
    </div>
  );
}

export default Post;
