import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./HomePage.css";
import { Link } from "react-router";

function HomePage() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1> A Fake React Shop of All Time</h1>
      <div className="card">
        <Link to="/shop">
          <button>Go to Shop</button>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
