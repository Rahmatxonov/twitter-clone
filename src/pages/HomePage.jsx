import React from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import Context from "../components/Context";

const HomePage = () => {
  return (
    <>
      <Sidebar />
      <Feed />
      <Widgets />
      <Context />
    </>
  );
};

export default HomePage;
