import React from "react";
import { Navbar } from "flowbite-react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const handleLanguageChange = () => {
    const lang = document.getElementById("lang").value;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };
  return (
    <div className="px-[5%] md:px-[10%] fixed z-30 w-full py-1 bg-white">
      <Navbar fluid rounded className="w-full py-2">
        <Navbar.Brand href="/" className="h-fit">
          <img
            src="/assets/logo.png"
            className="mr- w-[100px] md:w-[100px]"
            alt="İstanbul Alüminyum Endüstri Ticaret Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <select
            className="rounded-lg border-2 border-gray-300 md:px-2 md:py-1 mr-2 md:ml-5"
            name="lang"
            id="lang"
            value={i18n.language}
            onChange={handleLanguageChange}
          >
            <option value="tr" disabled={i18n.language === "tr"}>
              Türkçe
            </option>
            {/*
            <option value="en" disabled={i18n.language === "en"}>
              English
            </option>
            <option value="ar" disabled={i18n.language === "ar"}>
              عربي
            </option>
            */}
          </select>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Link
            to="/"
            className={`navbar_link xl:text-lg mx-2 md:mx-4 ${
              location.pathname == "/" ? "text-blue-700" : false
            }`}
          >
            {t("header.home")}
          </Link>
          <Link
            to="/hakkimizda"
            className={`navbar_link xl:text-lg mx-2 md:mx-4  ${
              location.pathname === "/hakkimizda" ? "text-blue-700" : ""
            }`}
          >
            {t("header.about")}
          </Link>

          <Link
            to="/urunlerimiz"
            className={`navbar_link xl:text-lg mx-2 md:mx-4 ${
              location.pathname == "/urunlerimiz" ? "text-blue-700" : false
            }`}
          >
            {t("header.products")}
          </Link>
          {/* <Link to="/agirlik-hesaplama-cetveli" className={`navbar_link xl:text-lg mx-2 md:mx-4 ${location.pathname == '/agirlik-hesaplama-cetveli' ? 'text-blue-700' : false}`}>
            {t("header.weightCalculationRuler")}
          </Link> */}
          <Link
            to="/iletisim"
            className={`navbar_link xl:text-lg mx-2 md:mx-4 ${
              location.pathname == "/iletisim" ? "text-blue-700" : false
            }`}
          >
            {t("header.contact")}
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
