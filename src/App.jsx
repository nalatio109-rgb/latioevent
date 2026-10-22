import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import CustomCursor from './components/CustomCursor';
import { useLenis } from './hooks/useLenis';
import './index.css';

function AppContent() {
  useLenis();

  return (
    <div className="App" style={{ cursor: 'none' }}>
      <CustomCursor />
      {/* Header removed: Hero now includes its own embedded navigation */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
