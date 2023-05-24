import React from "react";
import Link from "next/link";
import { AiFillCar } from "react-icons/ai";
import { RiCarFill } from "react-icons/ri";
import { GrGamepad } from "react-icons/gr";
import { TbHomeSearch, TbClockHour3 } from "react-icons/tb";
import {
  BsFillExclamationCircleFill,
  BsFillHouseCheckFill,
  BsHouseHeartFill
} from "react-icons/bs";

import styles from './sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <ul className={styles.sidebarList}>
          <li className={styles.sidebarListItem}>
            <TbHomeSearch className={styles.sidebarIcon} />
            <Link href="/" className={styles.sidebarListItemText}>
              Evim Yuvan Olsun
            </Link>
          </li>
          <li className={styles.sidebarListItem}>
            <BsFillExclamationCircleFill className={styles.sidebarIcon} />
            <Link href="/" className={styles.sidebarListItemText}>
              Acil Acil
            </Link>
          </li>

          <li className={styles.sidebarListItem}>
            <TbClockHour3 className={styles.sidebarIcon} />
            <Link href="/" className={styles.sidebarListItemText}>
              Son 48 Saat / 1 Hafta / 1 Ay
            </Link>
          </li>

          <li className={styles.sidebarListItem}>
            <RiCarFill className={styles.sidebarIcon} />
            <Link href="/" className={styles.sidebarListItemText}>
              Oto360
            </Link>
            <ul className={styles.nestedList}>
              <li className={styles.liTitle}>S-Aracım</li>
              <li className={styles.liTitle}>Tümünü Göster</li>
            </ul>
          </li>

          <li className={styles.sidebarListItem}>
            <BsFillHouseCheckFill className={styles.sidebarIcon} />
            <Link href="/" className={styles.sidebarListItemText}>
              Emlak360
            </Link>
          </li>

          <li className={styles.sidebarListItem}>
            <BsHouseHeartFill className={styles.sidebarIcon} />
            <Link href="/" className={styles.sidebarListItemText}>
              Emlak
            </Link>
            <ul className={styles.nestedList}>
              <li className={styles.liTitle}>Konut</li>
              <li className={styles.liTitle}>Iş Yeri</li>
              <li className={styles.liTitle}>Arsa</li>
              <li className={styles.liTitle}>Konut Projeleri</li>
              <li className={styles.liTitle}>Bina</li>
              <li className={styles.liTitle}>Devre Mülk</li>
              <li className={styles.liTitle}>Turistlik yerler</li>
            </ul>
          </li>

          <li className={styles.sidebarListItem}>
            <AiFillCar className={styles.sidebarIcon} />
            <Link href="/" className={styles.sidebarListItemText}>
              Vasıta
            </Link>
            <ul className={styles.nestedList}>
              <li className={styles.liTitle}>Otomobil</li>
              <li className={styles.liTitle}>Arazi, SUV & Pickup</li>
              <li className={styles.liTitle}>Motosiklet</li>
              <li className={styles.liTitle}>Minivan & Panelvan</li>
              <li className={styles.liTitle}>Ticari Araçlar</li>
              <li className={styles.liTitle}>Elektrikli Araçlar</li>
              <li className={styles.liTitle}>Kiralık Araçlar</li>
              <li className={styles.liTitle}>Hasarlı Araçlar</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
