'use client';

import { Dropdown } from 'flowbite-react';
import { HiPrinter, HiDownload, HiSave, HiShare } from 'react-icons/hi';

import { AiOutlineEllipsis } from "react-icons/ai";

export default function DropdownItemsWithIcon() {
  return (
    <>
      {/* <Dropdown label="Dropdown" icon={AiOutlineEllipsis} inline>
        <Dropdown.Item icon={HiShare}>
          Share
        </Dropdown.Item>
        <Dropdown.Item icon={HiPrinter}>Print</Dropdown.Item>
        <Dropdown.Item icon={HiDownload}>Download</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item icon={HiSave}>Save</Dropdown.Item>
      </Dropdown> */}
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn m-1">
          <AiOutlineEllipsis />
        </label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li className="tooltip tooltip-left" data-tip="hello"><HiShare /><a>Share</a></li>
          <li><HiPrinter /><a>Print</a></li>
        </ul>
      </div>
    </>

  )
}


