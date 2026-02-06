import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/home/Hero'
import ProjectList from './components/home/ProjectList'
import About from './components/home/About'
import Testimonial from './components/home/Testimonial'
import GlowEffect from './components/ui/GlowEffect'
import Cursor from './components/ui/Cursor'
import ScrollToTop from './components/layout/ScrollToTop'
import Chinchilli from './pages/Chinchilli'
import ROIDigital from './pages/ROIDigital'
import Kraft from './pages/Kraft'
import Borderless from './pages/Borderless'
import Munchmate from './pages/Munchmate'
import BIC from './pages/BIC'
import Lakowe from './pages/Lakowe'
import Mixta from './pages/Mixta'
import HeroProject from './pages/HeroProject'
import Miscellaneous from './pages/Miscellaneous'

const Home = () => {
  const location = useLocation();
  const [category, setCategory] = useState(location.state?.category || 'Brand Design');
  // Update category if state changes (e.g. navigation back)
  useEffect(() => {
    if (location.state?.category) {
      setCategory(location.state.category);
    }
  }, [location.state]);

  return (
    <>
      <Hero activeCategory={category} setCategory={setCategory} />
      <ProjectList category={category} />
      <About />
      <Testimonial />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <ScrollToTop />
        <Cursor />
        {/* GlowEffect removed */}
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/chinchilli" element={<Chinchilli />} />
            <Route path="/work/roi-digital" element={<ROIDigital />} />
            <Route path="/work/kraft" element={<Kraft />} />
            <Route path="/work/borderless" element={<Borderless />} />
            <Route path="/work/munchmate" element={<Munchmate />} />
            <Route path="/work/bic" element={<BIC />} />
            <Route path="/work/lakowe" element={<Lakowe />} />
            <Route path="/work/mixta" element={<Mixta />} />
            <Route path="/work/hero" element={<HeroProject />} />
            <Route path="/work/miscellaneous" element={<Miscellaneous />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

