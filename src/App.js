// import logo from './logo.svg';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Datenschutz from './pages/Datenschutz';
import BlackTea from './pages/TeaVarieties/BlackTea';
import GreenTea from './pages/TeaVarieties/GreenTea';
import AromaticBlackTea from './pages/TeaVarieties/AromaticBlackTea';
import AromaticGreenTea from './pages/TeaVarieties/AromaticGreenTea';
import FruitTea from './pages/TeaVarieties/FruitTea';
import RooibuschHoneybuschTee from './pages/TeaVarieties/RooibuschHoneybuschTee';
import Kräutermischungen from './pages/TeaVarieties/Kräutermischungen';
import SpiceAndChaiTea from './pages/TeaVarieties/SpiceAndChaiTea';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/black_tea" element={<BlackTea />} />
        <Route path="/green_tea" element={<GreenTea />} />
        <Route path="/aromatic_blacktea" element={<AromaticBlackTea />} />
        <Route path="/aromatic_greentea" element={<AromaticGreenTea />} />
        <Route path="/fruit_tea" element={<FruitTea />} />
        <Route path="/rooibusch_honeybusch" element={<RooibuschHoneybuschTee />} />
        <Route path="/krautermischungen" element={<Kräutermischungen />} />
        <Route path="/spice_and_chai_tea" element={<SpiceAndChaiTea />} />
      </Routes>
    </Router>
  );
}

// here app catches the suspense from page in case translations are not yet loaded
export default function WrappedApp() {
  return (
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  );
}