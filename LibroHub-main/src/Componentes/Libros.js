import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import './Libros.css';
import Lista from './LinkedList';  

const Libros = ({ addToCart }) => {
    const [libros, setLibros] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Inicializar useNavigate

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

            const listaLibros = new Lista();
            data.forEach(libro => {
                listaLibros.agregar(libro);
            });

            const librosOrdenados = listaLibros.obtenerLibros();
            setLibros(librosOrdenados);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchLibros();
    }, []);

    const handleImageClick = (id) => {
        navigate(`/libro/${id}`); // Navegar a la ruta del libro
    };

    return (
        <div>
            {error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>
            ) : (
                <div id="info">
                    {libros.map((libro) => (
                        <div className="book-card" key={libro.id}>
                            <img 
                                src={libro.imagen} 
                                alt={libro.titulo} 
                                className="book-image" 
                                onClick={() => handleImageClick(libro.id)} // Manejar clic en la imagen
                            />
                            <div className="book-info">
                                <h3>{libro.titulo}</h3>
                                <p>Autor: {libro.autor}</p>
                                <p>Categoría: {libro.categoria}</p>
                                <p>Precio: S/.{libro.precio}</p>
                                <button onClick={() => addToCart(libro)}>Añadir al Carrito</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Libros;
