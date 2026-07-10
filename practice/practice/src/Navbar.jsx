import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navul">
        <li> <Link to="/home">Home</Link></li>
        <li> <Link to="/women">Women</Link></li>
        <li> <Link to="/men">Men</Link></li>
        <li> <Link to="/kids">Kids</Link></li>
        <li> <Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  )
}
export default Navbar;