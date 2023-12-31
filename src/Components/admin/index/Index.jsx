import React from "react";
import {
  BrowserRouter as Router,
//   Routes,
//   Route,
  Outlet,
} from "react-router-dom";
// import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Settings } from "@mui/icons-material";

import { Navbar, Footer, Sidebar, ThemeSettings } from "..";
// import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from '../../../pages/admin';
// import { useStateContext } from '../../contexts/ContextProvider';
import { useStateContext } from "../../../contexts/ContextProvider";

function Index() {
  const {
    activeMenu,
    // setActiveMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      {/* <Router> */}
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" stylle={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              className="text-1xl p-2 rounded-full hover:shadow-xl hover:bg-light-gray text-white"
              style={{ background: currentColor }}
            >
              <Settings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div
            className="w-72 fixed sidebar
                        dark:bg-secondary-dark-bg bg-white"
          >
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg 
                    min-h-screen w-full 
                    ${activeMenu ? "md:ml-72" : "flex-2"}`}
        >
          {/* <div
                    className={
                        activeMenu
                            ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                            : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                    }
                > */}
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>

          <div>
            {themeSettings && <ThemeSettings />}
            <Outlet />
          </div>
        </div>
      </div>
      {/* </Router> */}
    </div>
  );
}

export default Index;
