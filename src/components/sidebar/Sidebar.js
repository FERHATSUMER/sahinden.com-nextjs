import { MdOutlineRssFeed } from "react-icons/md";
import { GiShop } from "react-icons/gi";
import { GrGamepad } from "react-icons/gr";
import { TbHomeSearch } from "react-icons/tb";
import {
  BsFillBagFill,
  BsFillCameraVideoFill,
  BsFillBookmarkStarFill,
  BsQuestionSquareFill,
} from "react-icons/bs";

import "./sidebar.css";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <TbHomeSearch className="sidebarIcon" />
            <Link href="/" className="sidebarListItemText">
              Evim Yuvan Olsun
            </Link>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default Sidebar;
