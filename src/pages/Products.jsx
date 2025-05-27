import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/layout";
import { useTranslation } from "react-i18next";

// Yeni ürün resimlerini import et
import alüminyumImage from "../assets/productsBGS/alüminyum.png";
import bakırImage from "../assets/productsBGS/bakır.png";
import bronzImage from "../assets/productsBGS/bronz.png";
import fiberImage from "../assets/productsBGS/fiber.png";
import kestamitImage from "../assets/productsBGS/kestamit.png";
import pirinçImage from "../assets/productsBGS/pirinç.png";
import polietilenImage from "../assets/productsBGS/polietilen.png";
import polyamidImage from "../assets/productsBGS/polyamid.png";
import ptfeImage from "../assets/productsBGS/ptfe.png";

const Products = () => {
  const { t } = useTranslation();

  const categories = [
    { name: "products.alüminyum", path: "alüminyum", bg: alüminyumImage },
    { name: "products.bakır", path: "bakır", bg: bakırImage },
    { name: "products.bronz", path: "bronz", bg: bronzImage },
    { name: "products.fiber", path: "fiber", bg: fiberImage },
    { name: "products.kestamit", path: "kestamit", bg: kestamitImage },
    { name: "products.pirinç", path: "pirinç", bg: pirinçImage },
    { name: "products.polietilen", path: "polietilen", bg: polietilenImage },
    { name: "products.polyamid", path: "polyamid", bg: polyamidImage },
    { name: "products.ptfe", path: "ptfe", bg: ptfeImage },
  ];

  return (
    <Layout>
      <div className="py-[140px]">
        <h1 className="text-3xl font-bold text-center mb-12">{t("products.title")}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 mx-auto px-[10%]">
          {categories.map((category) => (
            <Link
              to={`/urunlerimiz/${category.path}`}
              key={category.path}
              className="shadow-xl hover:shadow-2xl transition-shadow duration-700 ease-in-out transform hover:scale-110 rounded-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={category.bg}
                  alt={category.path}
                  className="object-cover object-center w-full h-48"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <p className="text-white text-xl font-medium">
                    {t(category.name)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
