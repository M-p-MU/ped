import React from 'react';
import { HiPrinter, HiDownload, HiSave, HiShare } from 'react-icons/hi';
import { AiOutlineEllipsis } from "react-icons/ai";

const DropdownItemsWithIcon = () => {
  return (
    <>
      <div className="dropdown dropdown-hover">
        <label htmlFor='moreIndex'
          tabIndex="0"
          className="btn m-1" top>
          <AiOutlineEllipsis />
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li className="tooltip tooltip-left" data-tip="save"><a href='#'><HiSave />Save</a></li>
          <li className="tooltip tooltip-left" data-tip="share"><a href='#'><HiShare />Share</a></li>
          <li className="tooltip tooltip-left" data-tip="print"><a href='#'><HiPrinter />Print</a></li>
          <li className="tooltip tooltip-left" data-tip="download"><a href='#'><HiDownload />Download</a></li>
        </ul>
      </div>
    </>

  )
}
export default DropdownItemsWithIcon;


