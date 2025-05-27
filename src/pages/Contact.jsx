import React from 'react'
import Layout from "../layouts/layout"
import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      {/* Arka plan rengi eklendi */}
      <div className="min-h-screen bg-[#e0e5ec]">
        <div
          className="
            mx-auto
            max-w-screen-lg
            pt-[200px]
            pb-10
            bg-[url('/assets/contact.jpg')]
            bg-contain
            bg-no-repeat
            bg-center
          "
        >
          <div className='flex justify-center'>
            <h1 className='w-fit text-2xl md:text-4xl px-4 py-3 font-medium text-white bg-slate-600 bg-opacity-50 rounded-lg'>
              {t("contact.title")}
            </h1>
          </div>

          <div className='grid place-items-center w-full mt-10 md:mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full px-[10%] md:px-[15%]'>

              {/* Sol - İletişim Bilgileri */}
              <div className='md:col-span-1 px-4 md:px-[38px] py-4 md:py-10 bg-slate-600 bg-opacity-50 flex flex-col justify-between rounded-xl md:rounded-r-none md:rounded-l-xl'>
                <div>
                  <div className={`w-full flex flex-col ${i18n.language === 'ar' ? 'items-end' : ''}`}>
                    <p className='text-white text-xl font-semibold'>{t("contact.info")}</p>
                    <hr className='w-24 mt-2 border border-white' />
                  </div>

                  <div>
                    <p className={`font-bold text-xl text-white mt-5 ${i18n.language === 'ar' ? 'text-right' : ''}`}>
                      {t("contact.address")}
                    </p>
                    <div className='border-2 border-white rounded-xl px-1 md:px-5 py-3 text-white flex items-center mt-3 gap-3'>
                      <IoLocationOutline className='text-[4em] md:text-[2em]' />
                      <p>Esenşehir Mahallesi Atılım Sokak No:60/3 Ümraniye/İstanbul</p>
                    </div>
                  </div>

                  <div>
                    <p className={`font-bold text-xl text-white mt-5 ${i18n.language === 'ar' ? 'text-right' : ''}`}>
                      {t("contact.title2")}
                    </p>
                    <div className='flex flex-col gap-2 border-2 border-white rounded-xl pl-3 md:px-5 py-3 text-white mt-3'>
                      <div className='gap-3 flex items-center'>
                        <FaPhone className='text-[1em]' />
                        <p>+90 532 573 91 49</p>
                      </div>
                      <div className='gap-3 flex items-center'>
                        <FaPhone className='text-[1em]' />
                        <p>+90 537 257 74 58</p>
                      </div>
                      <div className='gap-3 flex items-center'>
                        <SiGmail className='text-[1em]' />
                        <p className='text-xs md:text-base'>istanbulaluminyumticaret@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex gap-5 mt-10'>
                  <a href="https://wa.me/+905325739149" target='_blank' rel="noreferrer">
                    <FaWhatsapp size={"2em"} className='text-white md:hover:text-[#25D366] transform hover:scale-110 transition-transform duration-300' />
                  </a>
                  <a href="https://www.instagram.com/istanbulaluminyumticaret" target='_blank' rel="noreferrer">
                    <FaInstagram size={"2em"} className='text-white instagram transform hover:scale-110 transition-transform duration-300' />
                  </a>
                  <a href="mailto:istanbulaluminyumticaret@gmail.com?subject=&body=" target='_blank' rel="noreferrer">
                    <SiGmail size={"2em"} className='text-white md:hover:text-[#c71610] md:hover:bg-white md:hover:rounded-lg md:hover:py-[1px] transform hover:scale-110 transition-transform duration-300' />
                  </a>
                </div>
              </div>

              {/* Sağ - Harita */}
              <div className='hidden md:col-span-1 px-3 py-3 md:px-[38px] md:py-10 md:py-none md:flex md:flex-col md:justify-center bg-slate-800 bg-opacity-60 rounded-b-xl md:rounded-bl-none md:rounded-r-xl'>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.9313014141926!2d29.166239376424862!3d41.004876819633935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf10d090b9ef%3A0x55b00e5833c0015c!2zRXNlbsWfZWhpciwgQXTEsWzEsW0gU2suIE5vOjYwLCAzNDc3NiDDnG1yYW5peWUvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1747260648123!5m2!1str!2str"
                    className='rounded-md w-[100%] h-[220px] md:h-[300px]'
                    allowFullScreen=''
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    title='Google Haritalar'></iframe>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Mobil harita */}
        <div className='md:hidden py-[5%] px-[5%] bg-[rgb(241,240,234)]'>
          <p className='text-black text-2xl font-medium text-center'>Haritada Bizi Bulun</p>
          <div className='mt-5'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3010.3658036087722!2d29.145282076040964!3d41.01725227134925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDAxJzAyLjEiTiAyOcKwMDgnNTIuMyJF!5e0!3m2!1str!2str!4v1705080229514!5m2!1str!2str"
              className='rounded-md w-[100%] h-[220px]'
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Google Haritalar'></iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
