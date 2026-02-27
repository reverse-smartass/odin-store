import './NavBar.css'
import { Link } from "react-router";
function Navbar({height}) {
  return (
    <>
    <nav className="navbar">
      <h1>Odin Store</h1>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/shop">Shopping</Link>
        <Link to="/cart">View Cart</Link>
      </div>
    </nav>
    <Spacer height={height}/>
    </>
  );
}

export function Spacer({height}) {
  return <div style={{ height: `${height}rem` }}></div>;
}

export default Navbar;