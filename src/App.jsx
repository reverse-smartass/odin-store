import ShoppingPage from "./ShoppingPage.jsx";
import CartPage from "./CartPage.jsx";
import { useState, useEffect } from "react";
import { useParams} from "react-router";
import Navbar, { Spacer } from "./Navbar.jsx";
import ErrorPage from "./errorpage.jsx";
import HomePage from "./HomePage.jsx";

/* const router = (count, setCount, products, setProducts) => createBrowserRouter([
    {
      path: "/shop",
      element: (
        <ShoppingPage
          count={count}
          setCount={setCount}
          products={products}
          setProducts={setProducts}
        />
      ),
    },
    {
      path: "/cart",
      element: <CartPage products={products} setProducts={setProducts} />,
    },
  ]); */

function App() {
  const [count, setCount] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.map((d) => ({ ...d, quantity: 0 })));

        const initialCount = data.map((d) => ({ id: d.id, quantity: 0 }));
        setCount(initialCount);
      });
  }, []);


  const { name } = useParams();
  return (<div>
      {name === "shop" ? (
        <>
        <Navbar height={14}/>
        <ShoppingPage
          count={count}
          setCount={setCount}
          products={products}
          setProducts={setProducts}
        />
        </>
        
      ) : name === "cart" ? (
        <>
        <Navbar height={0}/>
        <CartPage products={products} setProducts={setProducts} />
        </>
      ) : (name === "home" ? (
        <>
        <Navbar height={0}/>
        <HomePage />
        </>
      ) :
        <ErrorPage/>
      )}
    </div>)
}



export default App;
