import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import CampusLife from './components/CampusLife';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Features from './components/Features'; 
import Sections from './components/Sections';
import Footer from './components/Footer';
import Admission from './components/Admission';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Civil from './components/departments/Civil';
import CSE from './components/departments/CSE';
import ECE from './components/departments/ECE';
import Mechanical from './components/departments/Mechanical';
import Placement from './components/Placement';
import Gallery from './components/Gallery';
import President from './components/President';

function App() {
  return (
    <Router>
      <div className="site">
        <Navbar />
        <Routes>
          <Route path="/" element={(
            <>
              <Hero />
              <Features /> {/* Add this line to show the features section on the home page */}
              
              <President /> {/* Add this line where you want the section to appear */}
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
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;