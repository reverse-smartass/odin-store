
import "./ShoppingPage.css";
import Navbar from "./Navbar";


function ShoppingPage({ count, setCount, products, setProducts }) {

  function handleQuantityReplacement(productId, newQuantity) {
    setCount((prevCount) =>
      prevCount.map((p) =>
        p.id === productId ? { ...p, quantity: newQuantity } : p,
      ),
    );
  }

  function handleQuantityChange(productId, newQuantity) {
    setCount((prevCount) =>
      prevCount.map((p) =>
        p.id === productId ? { ...p, quantity: p.quantity + newQuantity } : p,
      ),
    );
  }

  return (
    <>
      <Navbar />

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h2 className="product-title">{product.title}</h2>
            <p>${product.price}</p>
            <div className="product-quantity">
              <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
              <input type="number" id={`quantity-${product.id}`}
                value={count.find((p) => p.id === product.id)?.quantity || 0}
                min={0}
                onChange={(e) => {
                  const amount = parseInt(e.target.value);
                  if (isNaN(amount) || amount < 0) {
                    alert("Please enter a valid non-negative number!");
                    return;
                  }
                  handleQuantityReplacement(product.id, amount);
                }}
              />
              <button onClick={() => handleQuantityChange(product.id, 1)}>
                +
              </button>
            </div>
            <div className="product-add">
              <button
                onClick={() => {
                  const quantityToAdd =
                    count.find((p) => p.id === product.id)?.quantity || 0;
                  if (quantityToAdd === 0) {
                    alert("Please select a quantity greater than 0!");
                    return;
                  }
                  setProducts((prevProducts) =>
                    prevProducts.map((p) =>
                      p.id === product.id
                        ? {
                            ...p,
                            quantity: p.quantity + quantityToAdd,
                          }
                        : p,
                    ),
                  );
                  setCount((prevCount) =>
                    prevCount.map((p) =>
                      p.id === product.id ? { ...p, quantity: 0 } : p,
                    ),
                  );
                  alert(
                    `Added ${quantityToAdd} of ${product.title} to cart! Current quantity in cart: ${products.find((p) => p.id === product.id)?.quantity + quantityToAdd || quantityToAdd}`,
                  );
                  console.log(products);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShoppingPage;
