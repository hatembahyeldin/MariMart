import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart, removeOneFromCart, calculateTotalPrice } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCart = cart.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPrice = Number(calculateTotalPrice() || 0).toFixed(2);

  const removeButtonStyle = {
    background: "red",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%"
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", marginTop: "50px", maxWidth: "1200px", margin: "auto" }}>
      <h1>Your Shopping Cart</h1>
      <input
        type="text"
        placeholder="Search in cart..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "90%",
          maxWidth: "500px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc"
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          justifyContent: "center",
          padding: "10px"
        }}
      >
        {filteredCart.length > 0 ? (
          filteredCart.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                textAlign: "center",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer"
              }}
            >
              <img 
                src={product.image} 
                alt={product.title} 
                style={{ width: "100%", height: "200px", objectFit: "contain", marginBottom: "10px" }} 
              />
              <h3>{product.title}</h3>
              <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
              <p><strong>Quantity:</strong> {product.quantity}</p>
              <p><strong>Total:</strong> ${(product.price * product.quantity).toFixed(2)}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
                {product.quantity > 1 && (
                  <button 
                    onClick={() => removeOneFromCart(product.id)} 
                    style={{
                      background: "#ff9800",
                      color: "white",
                      padding: "10px",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                      width: "100%"
                    }}
                  >
                    ➖ Remove One
                  </button>
                )}
                <button 
                  onClick={() => removeFromCart(product.id)} 
                  style={removeButtonStyle}
                >
                  ❌ Remove from Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          fontSize: "18px"
        }}
      >
        <strong>Grand Total:</strong> ${totalPrice}
      </div>
    </div>
  );
};

export default Cart;