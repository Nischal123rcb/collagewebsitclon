import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import CampusLife from './components/CampusLife';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';
import Admission from './components/Admission';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Civil from './components/departments/Civil';
import CSE from './components/departments/CSE';
import ECE from './components/departments/ECE';
import Mechanical from './components/departments/Mechanical';
import Placement from './components/Placement';

function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <Navbar />
        <Routes>
          <Route path="/" element={(
            <>
              <Hero />
              <Admission />
              <Sections />
            </>
          )} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/departments/civil" element={<Civil />} />
          <Route path="/departments/cse" element={<CSE />} />
          <Route path="/departments/ece" element={<ECE />} />
          <Route path="/departments/mechanical" element={<Mechanical />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
