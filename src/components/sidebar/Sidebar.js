import { MdOutlineRssFeed } from "react-icons/md";
import { RiCarFill } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";
import { TbHomeSearch, TbClockHour3 } from "react-icons/tb";
import { BsFillExclamationCircleFill } from "react-icons/bs";

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
          <li className="sidebarListItem">
            <BsFillExclamationCircleFill className="sidebarIcon" />
            <Link href="/" className="sidebarListItemText">
              Acil Acil
            </Link>
          </li>

          <li className="sidebarListItem">
            <TbClockHour3 className="sidebarIcon" />
            <Link href="/" className="sidebarListItemText">
              Son 48 Saat / 1 Hafta / 1 Ay
            </Link>
          </li>

          <li className="sidebarListItem">
            <RiCarFill className="sidebarIcon" />
            <Link href="/" className="sidebarListItemText">
              Oto360
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
