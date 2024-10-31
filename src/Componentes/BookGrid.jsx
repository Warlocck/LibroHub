import React from 'react';
import { Link } from 'react-router-dom';
import './BookGrid.css';

const books = [
  { id: 1, title: 'Title 1', description: 'Actualizado hoy' },
  { id: 2, title: 'Title 2', description: 'Actualizado ayer' },
  { id: 3, title: 'Title 3', description: 'Actualizado hace 2 días' },
  // Agrega más libros si es necesario
];

const BookGrid = () => (
  <div className="book-grid">
    {books.map((book) => (
      <div key={book.id} className="book-card">
        <Link to={`/libro/${book.id}`}>
          <div className="book-image">📘</div>
          <h3>{book.title}</h3>
        </Link>
        <p>{book.description}</p>
      </div>
    ))}
  </div>
);

export default BookGrid;
