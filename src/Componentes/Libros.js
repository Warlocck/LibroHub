// Libros.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Libros.css'; // Asegúrate de importar el archivo CSS donde defines los estilos

const Libros = () => {
    const [libros, setLibros] = useState([]);
    const [error, setError] = useState(null);

    const fetchLibros = async () => {
        try {
            const response = await fetch('http://26.101.227.87:8000', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            const data = await response.json();
            console.log(data);
            setLibros(data);
        } catch (error) {
            setError(error.message);
            console.error('Error al obtener los datos:', error);
        }
    };

    useEffect(() => {
        fetchLibros();
    }, []);

    return (
        <div>
            {error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>
            ) : (
                <div id="info">
                    {libros.map((libro) => (
                        <div className="book-card" key={libro.id}>
                            <img src={libro.imagen} alt={libro.titulo} className="book-image" />
                            <div className="book-info">
                                <Link to={`/libro/${libro.id}`} className="book-title">
                                    <h3>{libro.titulo}</h3>
                                </Link>
                                <p className="book-author">Autor: {libro.autor}</p>
                                <p className="book-category">Categoría: {libro.categoria}</p>
                                <p className="book-price">Precio: S/.{libro.precio}</p>
                                <button className="add-to-cart-btn">Añadir al Carrito</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Libros;
