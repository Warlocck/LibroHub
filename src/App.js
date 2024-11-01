import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Componentes/header';
import Home from './Paginas/Home';
import Carrito from './Paginas/Carrito';
import Login from './Paginas/Login';
import LibroDetalles from './Paginas/LibroDetalles';

function App() {
    const [carrito, setCarrito] = useState([]);
    const [usuario, setUsuario] = useState(''); 

    const addToCart = (libro) => {
        setCarrito((prevCarrito) => [...prevCarrito, libro]);
    };

    const removeFromCart = (indexToRemove) => {
        setCarrito((prevCarrito) => prevCarrito.filter((_, index) => index !== indexToRemove));
    };

    const carritoCount = carrito.length;

    return (
        <Router>
            <Header usuario={usuario} carritoCount={carritoCount} />
            <main>
                <Routes>
                    <Route path="/" element={<Home addToCart={addToCart} />} />
                    <Route path="/carrito" element={<Carrito carrito={carrito} removeFromCart={removeFromCart} />} />
                    <Route path="/login" element={<Login setUsuario={setUsuario} />} />
                    <Route path="/libro/:id" element={<LibroDetalles />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
