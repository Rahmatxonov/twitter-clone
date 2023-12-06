import React from "react";
import "../sass/ProfilePage.scss";
import twitter from "../images/img/twitter.png";
import google from "../images/img/google.png";
import apple from "../images/img/apple.png";

const ProfilePage = () => {
  return (
    <div className="logoBox">
      <img className="logoBox__twitterLogo" src={twitter} alt="Twitter logo" />
      <h2 className="logoBox__title">Sign in to Twitter</h2>
      <button className="logoBox__btn">
        <img className="logoBox__googleLogo" src={google} alt="google logo" />
        Sign in width Google
      </button>
      <button className="logoBox__btn">
        <img className="logoBox__googleLogo" src={apple} alt="apple logo" />
        Sign in width Google
      </button>

      <hr></hr>

      <span className="logoBox__spanOr">Or</span>

      <form>
        <input
          className="form-input"
          type="text"
          placeholder="Phone email or username"
        />
        <button className="form-btn">Next</button>
        <button className="form-button">Forget Password</button>
        <p className="form-text">
          Don't Have an Account <a className="form-a">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default ProfilePage;
