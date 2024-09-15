import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programacion1 from './pages/Programacion1';
import './style.css';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/programacion1" element={<Programacion1 />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
