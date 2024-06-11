import React, { useState } from "react";
import "../styles/CarAdd.css";
const CarAdd = () => {
  //   const [title, setTitle] = useState("");
  const [manufacture, setManufacture] = useState("");
  const [model, setModel] = useState("");
  const [rentPerDay, setRentPerDay] = useState("");
  const [capacity, setCapacity] = useState("");
  const [availableAt, setAvailableAt] = useState("");
  const [image, setImage] = useState("");

  const addCar = () => {
    const newCar = {
      manufacture,
      model,
      rentPerDay,
      capacity,
      availableAt,
      image,
    };

    fetch("http://localhost:8000/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar),
    }).then(() => {
      //   setTitle("");
      setManufacture("");
      setModel("");
      setRentPerDay("");
      setCapacity("");
      setAvailableAt("");
      setImage("");
      console.log("new car added.");
    });
  };

  return (
    <div id="card-add" className="caradd">
      <h2>Car Management</h2>
      <input
        type="text"
        placeholder="Manufacture"
        value={manufacture}
        onChange={(e) => setManufacture(e.target.value)}
      />
      <input
        type="text"
        placeholder="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rent Per Day"
        value={rentPerDay}
        onChange={(e) => setRentPerDay(e.target.value)}
      />
      <input
        type="number"
        placeholder="Capacity"
        value={capacity}
        onChange={(e) => setCapacity(e.target.value)}
      />
      <input
        type="date"
        placeholder="Available At"
        value={availableAt}
        onChange={(e) => setAvailableAt(e.target.value)}
      />
      <button className="add-button" onClick={addCar}>
        Add
      </button>
    </div>
  );
};

export default CarAdd;
