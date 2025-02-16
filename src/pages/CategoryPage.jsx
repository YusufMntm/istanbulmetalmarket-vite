// src/pages/CategoryPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from "../layouts/layout";
import products from '../data/products.json';
import Popup from '../components/Popup';

const CategoryPage = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category === 'tumurunler') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  }, [category]);

  return (
    <Layout>
      {filteredProducts.length > 0 ? (
        <div className='pt-[140px] pb-[200px] px-[5%] grid grid-cols-1 md:grid-cols-3 gap-10 items-center'>
          {filteredProducts.map((product) => (
            <Popup key={product.id} image={product.img} name={product.name} />
          ))}
        </div>
      ) : (
        <div className='h-[calc(100vh-200px)] grid place-items-center pb-[200px] px-[5%] text-center'>
          <p>Listelenecek ürün bulunamadı.</p>
        </div>
      )}
    </Layout>
  );
};

export default CategoryPage;
