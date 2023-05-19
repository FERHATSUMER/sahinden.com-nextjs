import Link from "next/link";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <img
        src="https://s0.shbdn.com/assets/images/sahibinden_logo_v13012023:a4a65c5ace0e80eac6171317531b4611.png"
        alt="sahibinden-logo"
      />
      <div className="input-container">
        <input
          className="input"
          placeholder="kelime,ilan no veya mağza adı ile ara "
        />
      </div>
      <Link className="detayli-arama" href="/">
        Detaylı Arama
      </Link>
      <div className="heaeder-rightside">
        <div>
          <Link href="/">Giriş Yap</Link>
          <Link href="/">Hesap Aç</Link>
        </div>
        <button>Ücretsiz*Ilan Ver</button>
      </div>
    </div>
  );
}

export default Header;
