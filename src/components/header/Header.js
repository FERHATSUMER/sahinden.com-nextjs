import Link from "next/link";
import './header.css';
import { FaSearch } from "react-icons/fa";


function Header() {
  return (
    <div className="header-container">
      <img className="img" src="https://s0.shbdn.com/assets/images/sahibinden_logo_v13012023:a4a65c5ace0e80eac6171317531b4611.png" alt="sahibinden-logo" />
      <div className="input-container">
      <FaSearch className="search-icon" />

        <input
          className="input"
          placeholder="kelime, ilan no veya mağaza adı ile ara"
          
        />
      </div>
      <Link href="/" className="detayli-arama">
        Detaylı Arama
      </Link>
      <div className="header-rightside">
        <Link href="/" className="right-title">
          Giriş Yap
        </Link>
        <Link href="/" className="right-title">
          Hesap Aç
        </Link>
        <button className="button">Ücretsiz İlan Ver</button>
      </div>
    </div>
  );
}

export default Header;
