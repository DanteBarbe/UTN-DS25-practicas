import {SearchBar} from '../Components/SearchBar';
import '../App.css';
import Book from '../Components/Book';
import { useState } from 'react';
import AddBookButton from '../Components/AddBookButton';
import {useFetch} from '../Hooks/useFetch';
import {SERVER_URL} from '../Constants';
import { useEffect } from 'react';

function HomeApp() {

const { data, isLoading, error } = useFetch("/books", SERVER_URL);
const [books, setBooks] = useState([]);
const [search , setSearch ] = useState ("");

useEffect(() => {
if (data) {
  setBooks(data);
}
}, [data]);

if (isLoading) return <p>Cargando libros...</p>;
if (error) return <p>Error: {error.message}</p>;

const addBook = async (newBook) => {
  try {
    const response = await fetch(SERVER_URL + "/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBook),
    });

    if (!response.ok) {
      throw new Error("Error al agregar libro");
    }

    const createdBook = await response.json();

    setBooks([...books, createdBook]);
  } catch (error) {
    alert("No se pudo agregar el libro: " + error.message);
  }
}

const uniqueGenre = new Set();
let filteredBooks = [];
const searchTerm = search.trim().toLowerCase();

if (searchTerm === "") {
  for (const book of books) {
    if (!uniqueGenre.has(book.genre)) {
      uniqueGenre.add(book.genre);
      filteredBooks.push(book);
    }
  }
}else{
  filteredBooks = books.filter(book =>
  book.title?.toLowerCase().includes(search.toLowerCase()) ||
  book.genre?.toLowerCase().includes(search.toLowerCase())
  )
}
return (
  <>
      <section className="home-section" style={{backgroundColor:'var(--primary-color)'}}>
      <div className='utilities'>
        <SearchBar search={search} onSetSearch={setSearch}/>
        <AddBookButton books={books} addBook={addBook}/>
      </div>

      {filteredBooks.length === 0 ? (
        <h2 style={{ marginTop: '2em', textAlign: 'center', paddingBottom: '2em'}}>
          No se encontró ningún libro para esa búsqueda</h2>
      ) : (<Book books={filteredBooks} md={2}/>
      )}
      </section>
  </>
)}

export default HomeApp;
