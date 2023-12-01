import React from "react";
import "./SidebarOption.scss";

const SidebarOption = ({ active, text, icon }) => {
  return (
    <div className={`SidebarOption ${active && "sidebarOption--active"}`}>
      <img className="SidebarOption__icon" src={icon} />
      <h2 className="SidebarOption__title">{text}</h2>
    </div>
  );
};

export default SidebarOption;
