import React from "react";
import CarouselSlider from "../components/CarouselSlider";
import Caroussel from "../components/Caroussel";
import Layout from "../layouts/layout";
import Screenshot_2 from "/assets/about2.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Yeni ürün görsellerini import et
import alüminyumImage from "../assets/productsBGS/alüminyum.png";
import bakırImage from "../assets/productsBGS/bakır.png";
import bronzImage from "../assets/productsBGS/bronz.png";
import fiberImage from "../assets/productsBGS/fiber.png";
import kestamitImage from "../assets/productsBGS/kestamit.png";
import pirinçImage from "../assets/productsBGS/pirinç.png";
import polietilenImage from "../assets/productsBGS/polietilen.png";
import polyemidImage from "../assets/productsBGS/polyemid.png";

function Home() {
  const { t, i18n } = useTranslation();

  const bottomProducts = [
    { name: "alüminyum", img: alüminyumImage },
    { name: "bakır", img: bakırImage },
    { name: "bronz", img: bronzImage },
    { name: "fiber", img: fiberImage },
    { name: "kestamit", img: kestamitImage },
    { name: "pirinç", img: pirinçImage },
    { name: "polietilen", img: polietilenImage },
    { name: "polyemid", img: polyemidImage },
  ];

  return (
    <Layout>
      <div className="md:px-[20%]">
        <CarouselSlider />
      </div>

      <div className="px-[20%] mb-20 md:mb-0">
        <h1 className="text-center font-semibold text-3xl tracking-wide mt-20">
          {t("home.about")}
        </h1>
        <div className="flex flex-col md:flex-row mt-5 items-center gap-10">
          <img
            src={Screenshot_2}
            alt=""
            className="md:h-[200px] xl:h-[300px]"
          />
          <div className="flex flex-col items-center gap-5">
            <p className="text-center">{t("home.aboutText")}</p>
            <Link
              to="/hakkimizda"
              className="border-b border-black w-fit text-black"
            >
              {t("home.readMore")}
            </Link>
          </div>
        </div>
      </div>

      <div className="px-[10%] mt-20 mb-32">
        <h2 className="text-center font-semibold text-3xl tracking-wide mb-10">
          {t("home.materialCategories")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {bottomProducts.map((item) => (
            <Link
              key={item.name}
              to={`/urunlerimiz/${item.name}`}
              className="hover:scale-105 transition-transform duration-500 ease-in-out flex flex-col items-center"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[150px] object-cover rounded-lg shadow"
              />
              <p className="mt-2 text-center font-medium">
                {t(`products.${item.name}`)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
