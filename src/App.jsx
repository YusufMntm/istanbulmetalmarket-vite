import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Products from "./pages/Products";
import CategoryPage from "./pages/CategoryPage"; 
import NotFound from './pages/NotFound';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0)
    localStorage.getItem('lang') ? i18n.changeLanguage(localStorage.getItem('lang')) : i18n.changeLanguage('tr')
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/urunlerimiz" element={<Products />} />
        <Route path="/urunlerimiz/:category" element={<CategoryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
