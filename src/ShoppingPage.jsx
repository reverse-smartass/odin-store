import { useEffect, useState } from 'react'
import './ShoppingPage.css'

function ShoppingPage() {
  const [count, setCount] = useState([])
  const [products, setProducts] = useState([]);
2
  useEffect(() => { 
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setProducts(data.map(d => ({...d, quantity: 0}))))
  products.map(product => setCount(count => [...count, { id: product.id, quantity: 0}]))
  }, [products.length]);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button >
          count is {count.length}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image"/>
            <h2 className='product-title'>{product.title}</h2>
            <p>${product.price}</p>
            <div className='product-quantity'>
              <button onClick={() => setCount(count.map(p => p.id === product.id ? {...p, quantity: Math.max(0, p.quantity - 1)} : p))}>-</button>
              <input type="number" value={count.find(p => p.id === product.id)?.quantity || 0} min={0} />
              <button onClick={() => setCount(count.map(p => p.id === product.id ? {...p, quantity: p.quantity + 1} : p))}>+</button>
            </div>
            <div className='product-add'>
              <button onClick={() => {
                setProducts(products.map(p => p.id === product.id ? {...p, quantity: count.find(c => c.id === p.id)?.quantity || 0} : p))
                setCount(count.map(p => p.id === product.id ? {...p, quantity: 0} : p))
                alert(`Added ${count.find(p => p.id === product.id)?.quantity || 0} of ${product.title} to cart!`)
              }}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )}

export default ShoppingPage
