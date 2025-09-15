import './styles/menu.css'
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav>
      <ul className="menu_list">
        <li><h2>Menú</h2></li>
        <li><Link to="/home">Inicio</Link></li>
        <ul className="sections_menu">
          <h2>Secciones</h2>
          <li><Link to="/terror">Terror</Link></li>
          <li><Link to="/science-fiction">Ciencia Ficción</Link></li>
          <li><Link to="/literary">Novela Literaria</Link></li>
          <li><Link to="/wwII">Segunda Guerra Mundial</Link></li>
        </ul>
        <li><Link to="/register">Registro</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  )
}
