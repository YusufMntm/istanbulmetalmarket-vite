import React from "react"
import CarouselSlider from "../components/CarouselSlider"
import Caroussel from "../components/Caroussel"
import Layout from "../layouts/layout"
import Screenshot_2 from '../assets/Screenshot_2.png'
import Chair from '../assets/wooden_chair.jpg'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';

function Home() {
  // eslint-disable-next-line no-unused-vars
  const { t, i18n } = useTranslation();
  // eslint-disable-next-line no-unused-vars
  const handleClick2 = () => {
    i18n.language === 'en' ? i18n.changeLanguage('tr') : i18n.changeLanguage('en')
  }

  const products2 = [
    { img: '/assets/featured/1.jpg', name: "001" },
    { img: '/assets/featured/2.jpg', name: "002" },
    { img: '/assets/featured/3.jpg', name: "003" },
    { img: '/assets/featured/4.jpg', name: "004" },
    { img: '/assets/featured/5.jpg', name: "005" },
    { img: '/assets/featured/6.jpg', name: "006" },
    { img: '/assets/featured/7.jpg', name: "007" },
    { img: '/assets/featured/8.jpg', name: "008" },
    { img: '/assets/featured/9.jpg', name: "009" },
    { img: '/assets/featured/10.jpg', name: "010" },
    { img: '/assets/featured/11.jpg', name: "011" },
    { img: '/assets/featured/12.jpg', name: "012" }
  ]

  return (
    <Layout>
      <div className="md:px-[20%]">
        <CarouselSlider />
      </div>
      <div className="px-[20%] mb-20 md:mb-0">
        <h1 className="text-center font-semibold text-3xl tracking-wide mt-20">{t("home.about")}</h1>
        <div className="flex flex-col md:flex-row mt-5 items-center gap-10">
          <img src={Screenshot_2} alt="" className="md:h-[300px] xl:h-[500px]" />
          <div className="flex flex-col items-center gap-5">
            <p className="text-center">{t("home.aboutText")}</p>
            <Link to="/hakkimizda" className="border-b border-black w-fit text-black">{t("home.readMore")}</Link>
          </div>
        </div>
      </div>

      <div className="py-[30px] px-[20%]">
        <h1 className="text-center font-semibold text-3xl tracking-wide my-10">{t("home.featuredProducts")}</h1>
        <Caroussel products={products2} />
        <div className="flex justify-center mt-10">
          <Link to="/urunlerimiz" className="border-b border-black w-fit text-black">{t("home.seeAll")}</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
