import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, addToFavorites } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;
  if (!product) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found</h2>;

  return (
    <div style={{ textAlign: "center", padding: "20px", marginTop: "50px", maxWidth: "800px", margin: "auto" }}>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "pointer"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img 
          src={product.image} 
          alt={product.title} 
          style={{ width: "100%", height: "300px", objectFit: "contain", marginBottom: "10px" }} 
        />
        <h2>{product.title}</h2>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
          <button 
            onClick={() => addToCart(product)} 
            style={{
              background: "#00BFA5",
              color: "white",
              padding: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              transition: "0.3s"
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
              padding: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              transition: "0.3s"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#FF7043")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#FF8A65")}
          >
            ❤️ Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;