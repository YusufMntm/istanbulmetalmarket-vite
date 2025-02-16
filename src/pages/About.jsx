import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import Layout from "../layouts/layout"
import Screenshot_1 from '../assets/Screenshot_1.png'
import Screenshot_2 from '../assets/Screenshot_2.png'
import { useTranslation } from 'react-i18next';

const fadeInAnimation = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const About = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <Layout>
      <motion.div
        variants={fadeInAnimation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        className="relative w-full h-[60vh] overflow-hidden"
      >
        <motion.div className="absolute inset-0 bg-[url('./assets/about_background.jpg')] bg-cover bg-center grayscale"></motion.div>
        <motion.div className="absolute inset-0 grid place-items-center">
          <h1 className="text-2xl md:text-7xl tracking-wide p-3 text-white bg-[#383E42] bg-opacity-90 font-bitter font-extralight">
            {t("about.about")}
          </h1>
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeInAnimation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        className='flex flex-col md:flex-row w-full px-[5%] md:px-[10%] mt-20 mb-20 gap-10 md:gap-20'
      >
        <motion.div className='flex flex-col gap-5'>
          <motion.p>{t("about.text1")}</motion.p>
          <motion.p>{t("about.text2")}</motion.p>
          <motion.p>{t("about.text3")}</motion.p>
          <img src='/assets/about.jpg' alt="" className='w-full h-inherit object-fill mt-5' />
        </motion.div>
        <motion.div className='flex flex-col gap-5'>
          <img src={Screenshot_2} alt="" className='w-full md:w-auto md:h-inherit object-fill mb-5 order-4 md:order-1' />
          <motion.p className='order-1 md:order-2'>
            {t("about.text4")}
          </motion.p>
          <motion.p className='order-2 md:order-3'>
            {t("about.text5")}
          </motion.p>
          <motion.p className='order-3 md:order-4'>
            {t("about.text6")}
          </motion.p>
        </motion.div>
      </motion.div>
    </Layout>
  )
}

export default About