import Link from "next/link";
import './header.css';
import { FaSearch } from "react-icons/fa";



function Header() {
    return (
    <div className="header-container">
        <img  className="img"
        src="https://s0.shbdn.com/assets/images/sahibinden_logo_v13012023:a4a65c5ace0e80eac6171317531b4611.png"  alt="sahibinden-logo"/>
        <div className="input-container">
            <input 
            className="input"
                placeholder="kelime,ilan no veya mağza adı ile ara "
            />
            <FaSearch className="search-icon" />
        </div>
        <Link className="detayli-arama" href="/">
                Detaylı Arama
            </Link>
        <div className="heaeder-rightside">
        <Link className="right-title"
         href="/">
                Giriş Yap
            </Link>
            <Link className="right-title" 
            href="/">
            Hesap Aç
            </Link>
            <button className="button">Ücretsiz*Ilan Ver</button>
        </div>
    </div>  );
}

export default Header;