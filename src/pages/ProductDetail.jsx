import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../layouts/layout";
import { useTranslation } from "react-i18next";
import { productsData } from "../data/productsData.js";

import alüminyumImage from "../assets/productsBGS/alüminyum.png";
import bakırImage     from "../assets/productsBGS/bakır.png";
import bronzImage     from "../assets/productsBGS/bronz.png";
import fiberImage     from "../assets/productsBGS/fiber.png";
import kestamitImage  from "../assets/productsBGS/kestamit.png";
import pirinçImage    from "../assets/productsBGS/pirinç.png";
import polietilenImage from "../assets/productsBGS/polietilen.png";
import polyamidImage  from "../assets/productsBGS/polyamid.png";
import ptfeImage      from "../assets/productsBGS/ptfe.png";

const imageMap = {
  alüminyum: alüminyumImage,
  bakır:     bakırImage,
  bronz:     bronzImage,
  fiber:     fiberImage,
  kestamit:  kestamitImage,
  pirinç:    pirinçImage,
  polietilen: polietilenImage,
  polyamid:  polyamidImage,
  ptfe:      ptfeImage,
};

export default function ProductDetail() {
  const { productId } = useParams();
  const { t } = useTranslation();
  const product = productsData[productId];

  if (!product) {
    return (
      <Layout>
        <div className="py-[140px] text-center">
          <h1 className="text-2xl font-bold">{t("products.notFound")}</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-[140px] pb-16 px-4 sm:px-8 max-w-5xl mx-auto space-y-12">

        {/* Banner */}
        {imageMap[productId] && (
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={imageMap[productId]}
              alt={product.title}
              className="w-full h-64 object-cover"
            />
          </div>
        )}

        {/* Başlık */}
        <h1 className="text-4xl font-bold text-center">{product.title}</h1>

        {/* Açıklama */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("products.description")}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {product.description}
          </p>
        </section>

        {/* Özellikler */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("products.features")}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {product.features.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>
        </section>

        {/* Teknik Bilgiler */}
        <section className="bg-white rounded-lg shadow-md p-8 overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4">Teknik Bilgiler</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-100">
              {Object.entries(product.specifications).map(([label, value]) => (
                <tr key={label}>
                  <th className="px-4 py-2 text-left font-medium">
                    {label}
                  </th>
                  <td className="px-4 py-2">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

      </div>
    </Layout>
  );
}
