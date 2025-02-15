import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFavorites = favorites.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", padding: "20px", marginTop: "50px", maxWidth: "1200px", margin: "auto" }}>
      <h1>Your Favorite Products</h1>
      <input
        type="text"
        placeholder="Search in favorites..."
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
        {filteredFavorites.length > 0 ? (
          filteredFavorites.map((product) => (
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
              <img src={product.image} alt={product.title} style={{ width: "100%", height: "200px", objectFit: "contain", marginBottom: "10px" }} />
              <h3>{product.title}</h3>
              <p><strong>Price:</strong> ${product.price}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
                <button 
                  onClick={() => removeFromFavorites(product.id)} 
                  style={{ 
                    background: "#E57373",
                    color: "white", 
                    padding: "10px", 
                    border: "none", 
                    borderRadius: "5px", 
                    cursor: "pointer", 
                    width: "100%"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#EF5350")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#E57373")}
                >
                  ❌ Remove from Favorites
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No favorite items.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;