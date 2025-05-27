import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Products from "./pages/Products";
import CategoryPage from "./pages/CategoryPage"; 
import ProductDetail from "./pages/ProductDetail";
import NotFound from './pages/NotFound';
import WeightCalculationRuler from './pages/WeightCalculationRuler';
import { useTranslation } from 'react-i18next';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0)
    localStorage.getItem('lang') ? i18n.changeLanguage(localStorage.getItem('lang')) : i18n.changeLanguage('tr')
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/urunlerimiz" element={<Products />} />
        <Route path="/urunlerimiz/:category" element={<CategoryPage />} />
        <Route path="/urunlerimiz/:category/:productId" element={<ProductDetail />} />
        <Route path="/agirlik-hesaplama-cetveli" element={<WeightCalculationRuler />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App;
