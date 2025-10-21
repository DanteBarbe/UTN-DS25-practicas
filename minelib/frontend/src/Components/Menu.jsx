import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import Button from 'react-bootstrap/Button';
import './styles/menu.css'

export const Menu = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login')
  }
  return (
    <nav>
      <ul className="menu_list">
        <li><h2>Menú</h2></li>
        <li><Link to="/">Inicio</Link></li>
        <ul className="sections_menu">
          <h2>Secciones</h2>
          <li><Link to="/terror">Terror</Link></li>
          <li><Link to="/science-fiction">Ciencia Ficción</Link></li>
          <li><Link to="/literary">Novela Literaria</Link></li>
          <li><Link to="/wwII">Segunda Guerra Mundial</Link></li>
        </ul>
        <li><Link to="/register">Registro</Link></li>
        
        { isAuthenticated && (
          <li><Link to="/contact">Contacto</Link></li>
        )}

        {isAuthenticated ? (
          <>
          <Button color="inherit" onClick={handleLogout}>
          Logout
          </Button>
          </>
          ) : (
          <Button color="inherit"> 
            <Link to="/login">
              Login
            </Link>
          </Button>
        )}

      </ul>
    </nav>
  )
}
