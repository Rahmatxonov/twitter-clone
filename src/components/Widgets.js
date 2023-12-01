import React from "react";
import "./Widgets.scss";

const Widgets = () => {
  return (
    <div className="Widgets">
      <h2>Widgets</h2>
      <div className="Widgets__inputBox">
        <input
          className="Widgets__input"
          type="text"
          placeholder="Search twitter"
        />
      </div>
    </div>
  );
};

export default Widgets;
