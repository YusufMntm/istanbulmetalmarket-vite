// src/pages/CategoryPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from "../layouts/layout";
import { useTranslation } from "react-i18next";
import { products } from '../data/products';
import Popup from '../components/Popup';

const CategoryPage = () => {
  const { category } = useParams();
  const { t } = useTranslation();

  const categoryProducts = products[category];

  if (!categoryProducts) {
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
        <h1 className="text-3xl font-bold mb-8">{t(`products.${category}`)}</h1>
        
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">{t("products.description")}</h2>
          <p className="text-gray-700 mb-8">{categoryProducts.description}</p>

          <h2 className="text-2xl font-semibold mb-4">{t("products.features")}</h2>
          <ul className="list-disc list-inside space-y-2 mb-8">
            {categoryProducts.features.map((feature, index) => (
              <li key={index} className="text-gray-700">
                {feature}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-4">{t("products.applications")}</h2>
          <ul className="list-disc list-inside space-y-2 mb-8">
            {categoryProducts.applications.map((application, index) => (
              <li key={index} className="text-gray-700">
                {application}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mb-4">{t("products.specifications")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(categoryProducts.specifications).map(([key, value]) => (
              <div key={key} className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">{t(`products.specifications.${key}`)}</p>
                <p className="text-gray-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
