import React from 'react';
import Libros from '../Componentes/Libros';

const Home = ({ addToCart }) => {
    return (
        <div>
            <Libros addToCart={addToCart} /> {/* Pasa addToCart a Libros */}
        </div>
    );
};

export default Home;
