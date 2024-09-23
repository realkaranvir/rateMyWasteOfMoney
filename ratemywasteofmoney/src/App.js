// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  // Sample car data
  const cars = [
    { id: 1, name: "Tesla Model S", rating: 4.5 },
    { id: 2, name: "Ford Mustang", rating: 4.2 },
    { id: 3, name: "Chevrolet Camaro", rating: 3.9 },
    { id: 4, name: "2018 Audi Q7 3.0T Premium Plus", rating: 4.1},
  ];

  // State for the selected car and rating input
  const [selectedCar, setSelectedCar] = useState(null);
  const [rating, setRating] = useState(0);

  // Function to handle rating submission
  const submitRating = () => {
    if (selectedCar && rating > 0) {
      alert(`You rated ${selectedCar.name} with ${rating} stars!`);
      // Reset rating and selection after submission
      setSelectedCar(null);
      setRating(0);
    } else {
      alert("Please select a car and a valid rating.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rate My Car</h1>
        <p>Your go-to car rating app!</p>
      </header>

      <main>
        <h2>Select a Car to Rate</h2>
        <div className="car-list">
          {cars.map((car) => (
            <div
              key={car.id}
              className={`car-item ${selectedCar?.id === car.id ? "selected" : ""}`}
              onClick={() => setSelectedCar(car)}
            >
              <h3>{car.name}</h3>
              <h3>Id: {car.id}</h3>
              
              <p>Current Rating: {car.rating} stars</p>
            </div>
          ))}
        </div>

        {selectedCar && (
          <div className="rating-section">
            <h3>Rate {selectedCar.name}</h3>
            <input
              type="number"
              value={rating}
              min="1"
              max="5"
              onChange={(e) => setRating(e.target.value)}
              placeholder="Enter rating (1-5)"
            />
            <button onClick={submitRating}>Submit Rating</button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
