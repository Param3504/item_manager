import React, { useState } from "react";

function ItemListManager() {
  const [items, setItems] = useState([]); // State for list of items
  const [inputValue, setInputValue] = useState(""); // State for input field

  // Function to handle adding an item
  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]); // Add the input value to the items list
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "left",
        padding: "20px",
      }}
    >
 
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ padding: "10px", width: "100%", marginBottom: "10px" }}
      />
      <button
        onClick={handleAddItem}
        style={{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Add Item
      </button>
    </div>
  );
}

export default ItemListManager;
