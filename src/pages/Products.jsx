import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "../layouts/layout";
import { useTranslation } from 'react-i18next';

// Resimleri import et
import manikurImage from '../assets/productsBGS/manikur.jpg';
import pedikurImage from '../assets/productsBGS/pedikur.jpg';
import yikamaImage from '../assets/productsBGS/yikama.jpg';
import taramaImage from '../assets/productsBGS/tarama.jpg';
import makyajImage from '../assets/productsBGS/makyaj.jpg';
import aynaImage from '../assets/productsBGS/ayna.jpg';
import oturmaImage from '../assets/productsBGS/oturma.jpg';
import karsilasmaImage from '../assets/productsBGS/karsilasma.jpg';
import tumuImage from '../assets/productsBGS/tumu.jpg';

const Products = () => {
  const { t } = useTranslation();

  const categories = [
    { name: 'products.manikur', path: 'manikursetlerimiz', bg: manikurImage },
    { name: 'products.pedikur', path: 'pedikursetlerimiz', bg: pedikurImage },
    { name: 'products.yikama', path: 'yikamasetlerimiz', bg: yikamaImage },
    { name: 'products.tarama', path: 'taramakoltuklarimiz', bg: taramaImage },
    { name: 'products.makyaj', path: 'makyajkoltuklarimiz', bg: makyajImage },
    { name: 'products.ayna', path: 'aynacesitlerimiz', bg: aynaImage },
    { name: 'products.oturma', path: 'oturmagruplarimiz', bg: oturmaImage },
    { name: 'products.karsilasma', path: 'karsilasmabankolarimiz', bg: karsilasmaImage },
    { name: 'products.tumu', path: 'tumurunler', bg: tumuImage },
  ];

  return (
    <Layout>
      <div className='py-[140px]'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-16 mx-auto px-[10%]'>
          {categories.map((category) => (
            <Link to={`/urunlerimiz/${category.path}`} key={category.path} className='shadow-xl hover:shadow-2xl transition-shadow duration-700 ease-in-out transform hover:scale-110'>
              <img src={category.bg} alt="" className='object-cover object-center' />
              <p className='w-full text-center text-lg font-medium py-3'>{t(category.name)}</p>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
