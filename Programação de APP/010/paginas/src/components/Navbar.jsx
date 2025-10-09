import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav className='navbar'>
        <Link to="/Home">Home Page</Link>
        <Link to="/Bar">produtosBar</Link>
        <Link to="/Sorveteria">Sorveteria</Link>
        <Link to="/Borracharia">pg Três</Link>
    </nav>
  )
}

export default Navbar