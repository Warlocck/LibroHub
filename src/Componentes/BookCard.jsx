// BookCard.js
import React from 'react';
import './BookCard.css';

const BookCard = ({ title, updated }) => (
  <div className="book-card">
    <div className="image-placeholder"></div>
    <h3>{title}</h3>
    <p>{updated}</p>
  </div>
);

export default BookCard;
