
import './CartPage.css'

function CartPage({products, setProducts}) {

    function getTotal() {
        return products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    }   

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>
            {products.filter(p => p.quantity > 0).map(product => (
                <div key={product.id} className="cart-item">
                    <img src={product.image} alt={product.title} className="cart-item-image"/>
                    <div className="cart-item-details">
                        <h2 className='cart-item-title'>{product.title}</h2>
                        <div className='cart-item-quantity'>
                            <div className=''>
                                 <p>${product.price}</p>
                            </div>
                            <div>
                                <div className='cart-item-quantity-controls'>
                                    <button onClick={() => setProducts(products.map(p => p.id === product.id ? {...p, quantity: Math.max(0, p.quantity - 1)} : p))}>-</button>
                                    <input type="number" value={product.quantity} min={0} onChange={(e) => setProducts(products.map(p => p.id === product.id ? {...p, quantity: parseInt(e.target.value) >= 0 ? parseInt(e.target.value) : 0} : p))} />
                                    <button onClick={() => setProducts(products.map(p => p.id === product.id ? {...p, quantity: p.quantity + 1} : p))}>+</button>
                                </div>
                                <p>Total: ${product.price * product.quantity}</p>
                            </div>
                           
                        </div>
                    </div>
                    
                </div>
            ))}
            <h2 className='cart-total'>Cart Total: ${getTotal()}</h2>
        </div>
    )
}

export default CartPage;