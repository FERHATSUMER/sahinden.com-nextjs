import { AiFillCar } from "react-icons/ai";
import { RiCarFill } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";
import { TbHomeSearch, TbClockHour3 } from "react-icons/tb";
import {
  BsFillExclamationCircleFill,
  BsFillHouseCheckFill,
  BsHouseHeartFill
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
            <li className="li-title">S-Aracım</li>
            <li className="li-title">Tümünü Göster</li>
          </li>

          <li className="sidebarListItem">
            <BsFillHouseCheckFill className="sidebarIcon" />
            <Link href="/" className="sidebarListItemText">
              Emlak360
            </Link>
          </li>
          <li className="sidebarListItem">
            <BsHouseHeartFill className="sidebarIcon" />
            <Link href="/" className="sidebarListItemText">
              Emlak
            </Link>
            <li className="li-title">Konut</li>
            <li className="li-title">Iş Yeri</li>
            <li className="li-title">Arsa</li>
            <li className="li-title">Konut Projeleri</li>
            <li className="li-title">Bina</li>
            <li className="li-title">Devre Mülk</li>
            <li className="li-title">Turistlik yerler</li>
          </li>
          <li className="sidebarListItem">
            <AiFillCar className="sidebarIcon" />
            <Link href="/" className="sidebarListItemText">
              Vasıta
            </Link>
            <li className="li-title">Otomobil</li>
            <li className="li-title">Arazi,SUV & Pickup</li>
            <li className="li-title">Motosiklet</li>
            <li className="li-title">Minivan & Panelvan</li>
            <li className="li-title">Ticari Araçlar</li>
            <li className="li-title">Elektirikli Araçlar</li>
            <li className="li-title">Kiralık Araçlar</li>
            <li className="li-title">Hasarlı Araçlar</li>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
