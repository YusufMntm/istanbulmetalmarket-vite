import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../layouts/layout";
import { useTranslation } from "react-i18next";

const ProductDetail = () => {
  const { productId } = useParams();
  const { t } = useTranslation();

  // Product details mapping
  const productDetails = {
    alüminyum: {
      features: [
        "products.alüminyum.feature1",
        "products.alüminyum.feature2",
        "products.alüminyum.feature3"
      ],
      description: "products.alüminyum.description"
    },
    bakır: {
      features: [
        "products.bakır.feature1",
        "products.bakır.feature2",
        "products.bakır.feature3"
      ],
      description: "products.bakır.description"
    },
    // Add other products similarly
  };

  const product = productDetails[productId];

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
      <div className="py-[140px] px-[10%]">
        <h1 className="text-3xl font-bold mb-8">{t(`products.${productId}`)}</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">{t("products.description")}</h2>
          <p className="text-gray-700 mb-8">{t(product.description)}</p>

          <h2 className="text-2xl font-semibold mb-4">{t("products.features")}</h2>
          <ul className="list-disc list-inside space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="text-gray-700">
                {t(feature)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail; 