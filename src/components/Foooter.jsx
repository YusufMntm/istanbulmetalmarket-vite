import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Foooter = () => {
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();
  return (
    <Footer className="px-5 py-3">
      <div className="w-full text-center border-t bg-white">
        <div className="w-full h-full justify-between sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center md:block w-full md:w-fit pb-10">
            <img src="/assets/logo.png" alt="" className="w-[200px] mt-5" />
          </div>
          <Footer.LinkGroup className="flex justify-between gap-5">
            <Link className="text-base" to="/hakkimizda">
              {t("header.about")}
            </Link>
            <Link className="text-base" to="/urunlerimiz">
              {t("header.products")}
            </Link>
            <Link className="text-base" to="/iletisim">
              {t("header.contact")}
            </Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="/" by="İstanbul Alüminyum Endüstri Ticaret" year={2025} />
        </div>
      </div>
    </Footer>
  );
};

export default Foooter;
