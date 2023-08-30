import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';  // Import AboutMe component
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import './App.css';

const pages = ['aboutme', 'portfolio', 'contact'];

function App() {
  const [currentPage, setCurrentPage] = useState('aboutme');

  return (
    <div className="app">
      <Header pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'aboutme' && <AboutMe />}
        {currentPage === 'portfolio' && <Portfolio />}
        {currentPage === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
