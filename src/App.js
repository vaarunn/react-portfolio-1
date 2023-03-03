import React from 'react';
import { BrowserRouter as Routes , Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

const App = () => {
  return (
    <div className="app">   
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/" element={<LandingPage/>} />
        </Routes>
    </div>
  );
};

export default App;
