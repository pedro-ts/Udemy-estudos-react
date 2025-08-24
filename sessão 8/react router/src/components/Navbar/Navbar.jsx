// Importando css
import "./Navbar.css"
// Importanto o componente de navegação entre páginas (link)
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default Navbar
