import React, { useState } from 'react';

const Administrador = () => {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [imagen_url, setImagenUrl] = useState('');
    const [fecha, setFecha] = useState('');
    const [nombreAutor, setNombreAutor] = useState('');
    const [biografiaAutor, setBiografiaAutor] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!titulo || !nombreAutor || !categoria || !precio || !stock || !imagen_url || !fecha || !biografiaAutor) {
            setError('Todos los campos son obligatorios.');
            return;
        }

        const libro = {
            titulo,
            categoria,
            precio: parseFloat(precio),  
            stock: parseInt(stock),  
            imagen_url,
            fecha: new Date(fecha).toISOString()  
        };
        
        const autor = {
            nombre: nombreAutor,
            biografia: biografiaAutor,
        };
        

        console.log('Payload being sent:', JSON.stringify({ libro, autor }));  

        try {
          
            const response = await fetch('http://26.101.227.87:8000/admin/agregar_libro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    libro: libro,
                    autor: autor,
                }),

            });

            if (!response.ok) {
                throw new Error('Error al agregar el autor y el libro');
            }
            
            setSuccess('Autor y libro agregados con éxito!');
    
            setTitulo('');
            setCategoria('');
            setPrecio('');
            setStock('');
            setImagenUrl('');
            setFecha('');
            setNombreAutor('');
            setBiografiaAutor('');
            setError(null);
        } catch (error) {
            setError(error.message);
            setSuccess(null);
        }
    };

    return (
        <div className="administrador">
            <h1>Agregar Autor y Libro</h1>
            <form onSubmit={handleSubmit}>
                <h2>Información del Autor</h2>
                <label>Nombre del Autor:</label>
                <input 
                    type="text" 
                    value={nombreAutor} 
                    onChange={(e) => setNombreAutor(e.target.value)} 
                    required 
                />
                
                <label>Biografía del Autor:</label>
                <textarea 
                    value={biografiaAutor} 
                    onChange={(e) => setBiografiaAutor(e.target.value)} 
                    required 
                />

                <h2>Información del Libro</h2>
                <label>Título:</label>
                <input 
                    type="text" 
                    value={titulo} 
                    onChange={(e) => setTitulo(e.target.value)} 
                    required 
                />
                
                <label>Categoría:</label>
                <input 
                    type="text" 
                    value={categoria} 
                    onChange={(e) => setCategoria(e.target.value)} 
                    required 
                />
                
                <label>Precio:</label>
                <input 
                    type="number" 
                    value={precio} 
                    onChange={(e) => setPrecio(e.target.value)} 
                    required 
                />

                <label>Stock:</label>
                <input 
                    type="number" 
                    value={stock} 
                    onChange={(e) => setStock(e.target.value)} 
                    required 
                />

                <label>Imagen URL:</label>
                <input 
                    type="text" 
                    value={imagen_url} 
                    onChange={(e) => setImagenUrl(e.target.value)} 
                    required 
                />

                <label>Fecha:</label>
                <input 
                    type="date" 
                    value={fecha} 
                    onChange={(e) => setFecha(e.target.value)} 
                    required 
                />

                <button type="submit">Agregar Autor y Libro</button>
            </form>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
    );
};

export default Administrador;
