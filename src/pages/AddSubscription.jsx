import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSubscription } from "../redux/subscriptionSlice";
import { useNavigate } from "react-router-dom";

function AddSubscription() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !price) return alert("Enter all fields");

    const newSub = {
      id: Date.now(),
      name,
      price,
    };

    dispatch(addSubscription(newSub));
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Subscription</h1>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      /><br /><br />

      <input
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      /><br /><br />

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default AddSubscription;