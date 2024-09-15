import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programacion1 from './pages/Programacion1';
import Programacion2 from './pages/Programacion2';
import Programacion3 from './pages/Programacion3';
import BasesDeDatos1 from './pages/basesdedatos1';
import BasesDeDatos2 from './pages/basesdedatos2';

import './style.css';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/programacion1" element={<Programacion1 />} />
                    <Route path="/programacion2" element={<Programacion2 />} />
                    <Route path="/programacion3" element={<Programacion3 />} />
                    <Route path="/basesdedatos1" element={<BasesDeDatos1 />} />
                    <Route path="/basesdedatos2" element={<BasesDeDatos2 />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
