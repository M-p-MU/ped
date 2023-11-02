import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatart from "../../../Assets/data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from "../../admin";
// import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from "../../../contexts/ContextProvider";
import jwt_decode from "jwt-decode";
import Button from "../Button";
import { MdOutlineCancel } from 'react-icons/md';
import { userProfileData } from '../../../data/dummy';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const [mail, setMail] = useState();
  const [name, setName] = useState();
  const authToken = localStorage.getItem("authToken");

  useEffect(() => {
    console.log(authToken);
    if (authToken) {
      const user = jwt_decode(authToken);
      if (user) {
        setName(user.input.username);
        setMail(user.input.email);
        // alert("========== OK ==========")
      }
    }
  }, []);
  const {
    screenSize,
    setScreenSize,
    activeMenu,
    setActiveMenu,
    isCliked,
    // setIsCliked,
    handleClick,
    currentColor,
  } = useStateContext();

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton
        title="Menu"
        customFunc={handleActiveMenu}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        {/* <TooltipComponent content="Profile" position="BottomCenter"> */}
        <div
          tabIndex={0}
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
        // onClick={() => handleClick("userProfile")}
        >
          <img
            className="rounded-full w-8 h-8"
            src={avatart}
            alt="user-profile"
          />
          <p>
            <span className="text-gray-400 text-14">Hi,</span>{" "}
            <span className="text-gray-400 font-bold ml-1 text-14">
              {name && name.split(" ")[0]}
            </span>
          </p>
          {/* <MdKeyboardArrowDown className="text-gray-400 text-14" /> */}
        </div>
        {/* <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
          <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
              <Button
                icon={<MdOutlineCancel />}
                color="rgb(153, 171, 180)"
                bgHoverColor="light-gray"
                size="2xl"
                borderRadius="50%"
              />
            </div>
            <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
              <img
                className="rounded-full h-24 w-24"
                src={avatart}
                alt="user-profile"
              />
              <div>
                <p className="font-semibold text-xl dark:text-gray-200"> Michael Roberts </p>
                <p className="text-gray-500 text-sm dark:text-gray-400">  Blogger   </p>
                <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> info@shop.com </p>
              </div>
            </div>
            <div>
              {userProfileData.map((item, index) => (
                <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
                  <button
                    type="button"
                    style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                    className=" text-xl rounded-lg p-3 hover:bg-light-gray"
                  >
                    {item.icon}
                  </button>

                  <div>
                    <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
                    <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <Button
                color="white"
                bgColor={currentColor}
                text="Logout"
                borderRadius="10px"
                width="full"
              />
            </div>
          </div>
        </ul> */}
        {/* </TooltipComponent> */}

        {/* {isCliked.cart && <Cart />} */}
        {isCliked.chart && <Chat />}
        {isCliked.notification && <Notification />}
        {/* {isCliked.userProfile && <UserProfile name={name} email={mail} />} */}
      </div>
    </div>
  );
};

export default Navbar;
