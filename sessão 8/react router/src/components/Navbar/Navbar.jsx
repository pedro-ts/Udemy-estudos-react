// Importando css
import "./Navbar.css"
// Importanto o componente de navegação entre páginas (link)
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
    </nav>
  )
}

export default Navbar
