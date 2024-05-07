import React from "react";
import WatchVideo from "./WatchVideo";
import ToggleSideBar from "../component/ToggleSideBar";
import { useSelector } from "react-redux";
import Suggestion from "./Suggestion";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const absoluteToggle = useSelector((store) => store.app.absoluteSideBar);

  return (

    <>
      {absoluteToggle && <ToggleSideBar />}
      <div className=" flex flex-col lg:flex-row">
  <div className="b">
    <WatchVideo />
  </div>
  <div className=" flex-col ">
    <LiveChat />
    <Suggestion />
  </div>
</div>

    </>
  );
};

export default WatchPage;
