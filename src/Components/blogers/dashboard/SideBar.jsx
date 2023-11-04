import React, { useState } from "react";
import Control from "../../../Assets/images/sider-icons/control.png";
import logo from "../../../Assets/images/logo/ped-logo.ico";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import InboxIcon from "@mui/icons-material/Inbox";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { Link } from "react-router-dom";

function SideBar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: <SpaceDashboardIcon />, modal: false, to: "/blg" },
    {
      title: "Inbox",
      src: <LocalPostOfficeIcon />,
      modal: false,
      to: "/blg/inbox",
      gap: true,
    },
    { title: "Blogs", src: <InboxIcon />, modal: false, to: "/blg/blogs" },
    {
      title: "Analytics",
      src: <LeaderboardIcon />,
      modal: false,
      to: "/blg/stat",
    },
    { title: "Settings", src: <SettingsIcon />, modal: true, gap: true },
  ];
  return (
    <>
      <div
        className={`h-[100%] ml-3 md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10  ${open ? "w-72" : "w-20"} p-5 pt-8 duration-300 bg-white relative `}
      >
        <img
          src={Control}
          alt="img"
          className={`absolute cursor-pointer -right-3 w-7 border-2 top-9 border-base rounded-full ${!open && "rotate-180"
            }`}
          onClick={() => setOpen(!open)}
        />
        <div className={`flex gap-x-4 items-center`}>
          <img
            src={logo}
            alt="img"
            className={`cursor-pointer w-8 duration-500
                    ${open && "rotate-[360deg]"}
                    `}
          />
          <h1
            className={`text-blue origin-left font-medium text-xl duration-300 ${!open && "scale-0"
              }`}
          >
            Ped
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-gray-900 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-200 rounded-md ${menu.gap ? "mt-9" : "mt-2"
                }`}
            >
              {/* Check if the menu item has a modal */}
              {menu.modal ? (
                <>
                  {/* Render modal content */}
                  {menu.src}
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {menu.title}
                  </span>
                </>
              ) : // If not a modal, check if it has a "to" property for routing
                menu.to ? (
                  // Render a Link component if "to" is provided
                  <>
                  { menu.src }
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    <Link to={menu.to}>
                      {menu.title}
                    </Link>
                    </span>
                  </>
                ) : (
                  // If neither modal nor routing, just render the content and title
                  <>
                    {menu.src}
                    <span
                      className={`${!open && "hidden"} origin-left duration-200`}
                    >
                      {menu.title}
                    </span>
                  </>
                )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SideBar;
