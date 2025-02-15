import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ProductList = () => {
  const { addToCart, addToFavorites } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", padding: "20px", marginTop: "50px", maxWidth: "1200px", margin: "auto" }}>
      <h1>Available Products</h1>
      <input
        type="text"
        placeholder="Search for products..."
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
        {filteredProducts.map((product) => (
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
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "contain",
                  marginBottom: "10px"
                }}
              />
              <h3 style={{ fontSize: "16px", fontWeight: "bold", minHeight: "40px" }}>{product.title}</h3>
            </Link>
            <p><strong>Price:</strong> ${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              style={{
                background: "#00BFA5",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
                marginTop: "10px"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#00A692")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#00BFA5")}
            >
              🛒 Add to Cart
            </button>
            <button
              onClick={() => addToFavorites(product)}
              style={{
                background: "#FF8A65",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
                marginTop: "5px"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#FF7043")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#FF8A65")}
            >
              ❤️ Add to Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;