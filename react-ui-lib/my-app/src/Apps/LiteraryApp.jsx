import './styles/styles.css';
import Book from '../Components/Book';
import { useState, useEffect } from 'react';
import { useFetch } from '../Hooks/useFetch';
import { SERVER_URL } from '../Constants';

export const LiteraryApp = () => {
  const { data, isLoading, error } = useFetch("/books", SERVER_URL);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setBooks(data);
    }
  }, [data]);

  if (isLoading) return <p>Cargando libros...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const novelas = books.filter(book => book.genre === 'novela');

  return (
      <section className='genre-section'>
        <Book books={novelas} md={3} />
      </section>
  );
};

export default LiteraryApp;
