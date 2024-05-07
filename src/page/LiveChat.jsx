import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { randomMessage, randomName } from "../utils/constant";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../Redux/CartSlice";

const LiveChat = () => {
  const [chatText, setchatText] = useState("");

  const chatmsg = useSelector((store) => store.cart.message);
  const dispatch = useDispatch();

  const buttonHandler = () => {
    dispatch(
      addMessage({
        name: "Punit",
        message: chatText,
      })
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(
        addMessage({
          name: randomName(),
          message: randomMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="">
      <div className=" mx-5  sm:mx-24 border-2 border-solid border-blue-500 m-3 rounded-lg">
        <div className="flex justify-between p-2 border-b-2 border-gray-500 ">
          <p>Show live Chat</p>
          <p className="">👇🏻</p>
        </div>
        <div className="overflow-y-scroll h-80 flex  flex-col-reverse">
          {/* Assuming messages is an array of objects containing name and message */}
          {chatmsg.map((msg, index) => (
            <ChatMessage key={index} name={msg.name} msg={msg.message} />
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="m-3"
        >
          <div className="flex">
            <input
              value={chatText}
              onChange={(e) => {
                setchatText(e.target.value);
              }}
              className="  rounded-l-2xl p-2   w-full border-2 border-solid  border-blue-500 outline-none "
              type="text"
              placeholder="Type"
            />
            <button
              onClick={buttonHandler}
              className="bg-blue-600 p-2 font-semibold italic text-white rounded-r-2xl"
            >
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
