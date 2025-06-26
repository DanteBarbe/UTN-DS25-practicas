import './styles/searchbar.css'
export const SearchBar = ({search, onSetSearch}) => {

  return (
  <div className='search'>
    <input
    type="text"
    placeholder ="Buscar libros..."
    value={search}
    onChange ={(e) => {onSetSearch(e.target.value)}}
    className='search-input'
    />
 </div>
  );
};