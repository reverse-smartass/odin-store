
import './CartPage.css'
import Navbar from './Navbar';

function CartPage({products, setProducts}) {
    return (
        <div className="cart-page">
            <Navbar />
            <h2>Shopping Cart</h2>
            {products.filter(p => p.quantity > 0).map(product => (
                <div key={product.id} className="cart-item">
                    <img src={product.image} alt={product.title} className="cart-item-image"/>
                    <h2 className='cart-item-title'>{product.title}</h2>
                    <p>${product.price}</p>
                    <div className='cart-item-quantity'>
                        <button onClick={() => setProducts(products.map(p => p.id === product.id ? {...p, quantity: Math.max(0, p.quantity - 1)} : p))}>-</button>
                        <input type="number" value={product.quantity} min={0} onChange={(e) => setProducts(products.map(p => p.id === product.id ? {...p, quantity: parseInt(e.target.value) >= 0 ? parseInt(e.target.value) : 0} : p))} />
                        <button onClick={() => setProducts(products.map(p => p.id === product.id ? {...p, quantity: p.quantity + 1} : p))}>+</button>
                    </div>
                    <p>Total: ${product.price * product.quantity}</p>
                </div>
            ))}
        </div>
    )
}

export default CartPage;