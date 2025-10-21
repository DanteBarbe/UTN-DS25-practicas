import './styles/styles.css'
import Book from '../Components/Book';
import { useState, useEffect } from 'react';
import { useFetch } from '../Hooks/useFetch';

export const TerrorApp = () => {
  const API_URL = import.meta.env.VITE_API_URL
  const { data, isLoading, error } = useFetch(`${API_URL}/books`);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (data && data.data) {
      setBooks(data.data);
    }
  }, [data]);

  if (isLoading) return <p>Cargando libros...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const novelas = books.filter(book => book.genre === 'terror');

  return (
      <section className='genre-section'>
        <Book books={novelas} md={3} />
      </section>
  );
}
export default TerrorApp