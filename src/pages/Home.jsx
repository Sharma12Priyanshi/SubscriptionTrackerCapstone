import { useState, useEffect } from "react";

function Home() {
  // Load from localStorage
  const [subs, setSubs] = useState(() => {
    const saved = localStorage.getItem("subs");
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  // Save data
  useEffect(() => {
    localStorage.setItem("subs", JSON.stringify(subs));
  }, [subs]);

  // Add
  const addSubscription = () => {
    if (!name || !price) return alert("Enter all fields");

    const newSub = {
      id: Date.now(),
      name,
      price: Number(price),
    };

    setSubs([...subs, newSub]);
    setName("");
    setPrice("");
  };

  // Delete
  const deleteSub = (id) => {
    setSubs(subs.filter((item) => item.id !== id));
  };

  // Total
  const total = subs.reduce((acc, item) => acc + item.price, 0);

  // Search
  const filteredSubs = subs.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: dark
          ? "linear-gradient(to right, #1e1e1e, #2c2c2c)"
          : "linear-gradient(to right, #74ebd5, #ACB6E5)",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "420px",
          margin: "auto",
          background: dark ? "#333" : "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 0 15px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
          💳 Subscription Tracker
        </h1>

        {/* Dark Mode */}
        <button
          onClick={() => setDark(!dark)}
          style={{
            marginBottom: "10px",
            padding: "6px 10px",
            cursor: "pointer",
          }}
        >
          🌙 Toggle Mode
        </button>

        {/* Inputs */}
        <div style={{ marginTop: "10px" }}>
          <input
            placeholder="Name (Netflix)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "8px",
              width: "45%",
              marginRight: "5px",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />

          <input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{
              padding: "8px",
              width: "30%",
              marginRight: "5px",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
          />

          <button
            onClick={addSubscription}
            style={{
              padding: "8px",
              background: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>

        {/* Search */}
        <input
          placeholder="🔍 Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            marginTop: "12px",
            width: "100%",
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid gray",
          }}
        />

        {/* Total */}
        <h2 style={{ marginTop: "12px" }}>Total: ₹{total}</h2>

        {/* List */}
        {filteredSubs.length === 0 ? (
          <p style={{ textAlign: "center" }}>No subscriptions found</p>
        ) : (
          filteredSubs.map((item) => (
            <div
              key={item.id}
              style={{
                marginTop: "10px",
                padding: "10px",
                borderRadius: "8px",
                background: dark ? "#444" : "#f1f1f1",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
              </div>

              <button
                onClick={() => deleteSub(item.id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 8px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                ❌
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;