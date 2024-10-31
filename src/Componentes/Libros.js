// Libros.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            <h2>Lista de Libros</h2>
            {error ? (
                <p style={{ color: 'red' }}>Error: {error}</p>
            ) : (
                <div id="info">
                    {libros.map((libro) => (
                        <div key={libro.id}>
                            <Link to={`/libro/${libro.id}`}>
                                <h3>{libro.titulo}</h3>
                            </Link>
                            <p>Autor: {libro.autor}</p>
                            <p>Categoría: {libro.categoria}</p>
                            <p>Precio: S/.{libro.precio}</p>
                            <p>Stock: {libro.stock}</p>
                            <img src={libro.imagen} alt={libro.titulo} width="100" />
                            <hr />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Libros;
