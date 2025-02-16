import React from 'react';
import { useTranslation } from 'react-i18next';

const Card = ({ product, index }) => {
  const { t } = useTranslation();
  return (
    <div className={`flex flex-col justify-between border rounded-lg shadow-lg p-3 mb-10 md:mb-5 md:mr-5 h-[350px]`}>
      <img src={product.img} alt={product.name} className="h-[200px] object-contain" />
      <h3 className='text-center'>{t('product.no')}{product.name}</h3>
    </div>
  );
};

export default Card;
