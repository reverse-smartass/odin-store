import './NavBar.css'
import { Link } from "react-router";
function Navbar() {
  return (
    <>
    <nav className="navbar">
      <h1>Odin Store</h1>
      <div className="nav-links">
        <Link to="/shop">Shopping</Link>
        <Link to="/cart">View Cart</Link>
      </div>
    </nav>
    <Spacer />
    </>
  );
}

export function Spacer() {
  return <div style={{ height: '14rem' }}></div>;
}

export default Navbar;