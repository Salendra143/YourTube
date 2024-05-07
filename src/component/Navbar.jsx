import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { Logo, VideoLogo, YOUTUBE_SUGGESTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { ToggleMenu } from "../Redux/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { addQuery } from "../Redux/CartSlice";

const Navbar = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [hideTimeout, setHideTimeout] = useState(null);

  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch(ToggleMenu());
  };

  const fetchAPI = async () => {
    const data = await fetch(YOUTUBE_SUGGESTION + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);
  };

  useEffect(() => {
    fetchAPI();
  }, [searchQuery]);

  const handleBlur = () => {
    setHideTimeout(setTimeout(() => setShowSuggestion(false), 2000)); // Delay hiding suggestions
  };

  const handleFocus = () => {
    clearTimeout(hideTimeout); // Clear hide timeout
    setShowSuggestion(true);
  };

  const buttonHandler = (text) => {
    clearTimeout(hideTimeout); // Clear hide timeout
    navigate("/results");
    dispatch(addQuery(text));
  };

  return (
    <div className="">
      <div className="flex justify-between items-center px-4 md:px-6 lg:px-8 py-2 shadow-lg">
        <div className="flex items-center w-1/4 md:w-1/5 lg:w-1/6">
          <GiHamburgerMenu
            onClick={toggleSidebar}
            className="text-xl md:text-2xl cursor-pointer"
          />
          <Link to={"/"}>
            <div className="relative">
              <img className="w-24 md:w-32" src={Logo} alt="" />
              <span className="absolute top-4 right-0 text-xs">IN</span>
            </div>
          </Link>
        </div>

        <div className="flex w-1/2 md:w-3/5 lg:w-1/2 items-center">
          <div className="flex w-full relative bg-slate-200 rounded-full">
            <input
              className="rounded-full w-full bg-slate-200 pl-4 md:pl-5 placeholder-italic outline-none placeholder-white placeholder-opacity-75 text-sm md:text-base"
              placeholder="Search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <IoSearch className="text-xl md:text-2xl m-1 md:m-2" />
            {showSuggestion && (
              <div className="absolute bg-white w-full mt-10 rounded-2xl px-3 gap-2 italic pb-2">
                {suggestion.map((text, index) => (
                  <p
                    onClick={() => buttonHandler(text)}
                    className="hover:bg-gray-400 cursor-pointer text-sm active:text-blue-600 mt-1"
                    key={index}
                  >
                    👀 {text}
                  </p>
                ))}
              </div>
            )}
          </div>

          <MdKeyboardVoice className="text-xl md:text-2xl mx-2 md:mx-3" />
        </div>

        <div className="flex justify-center items-center gap-3 md:gap-5">
          <img className="w-8 md:w-10" src={VideoLogo} alt="" />
          <FaBell className="text-lg md:text-xl" />
          <FaUserCircle className="text-xl md:text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
