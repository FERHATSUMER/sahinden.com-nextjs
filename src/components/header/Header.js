import Link from "next/link";
import styles from './header.module.css';
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div className={styles.container}>
    <div className={styles["header-container"]}>
      <img className={styles.img} src="https://s0.shbdn.com/assets/images/sahibinden_logo_v13012023:a4a65c5ace0e80eac6171317531b4611.png" alt="sahibinden-logo" />
      <div className={styles["input-container"]}>
        <FaSearch className={styles["search-icon"]} />

        <input
          className={styles.input}
          placeholder="kelime, ilan no veya mağaza adı ile ara"
        />
      </div>
      <Link href="/" className={styles["detayli-arama"]}>
        Detaylı Arama
      </Link>
      <div className={styles["header-rightside"]}>
        <Link href="/" className={styles["right-title"]}>
          Giriş Yap
        </Link>
        <Link href="/" className={styles["right-title"]}>
          Hesap Aç
        </Link>
        <button className={styles.button}>Ücretsiz İlan Ver</button>
      </div>
    </div>
    </div>
  );
}

export default Header;
