import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/CarForm.css";
const CarEdit = ({ setRefresh }) => {
  const { id } = useParams();
  const [car, setCar] = useState({
    manufacture: "",
    model: "",
    rentPerDay: "",
    capacity: "",
    availableAt: "",
  });

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/cars/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setCar(data);
        })
        .catch((err) => console.log(err));
    }
  }, [id]);

  const updateCar = () => {
    fetch(`http://localhost:8000/cars/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    }).then(() => {
      console.log("car updated.");
      setRefresh(true);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  return (
    <div id="card-edit" className="caredit">
      <h2>Car Management Edit</h2>
      <input
        type="text"
        name="manufacture"
        placeholder="Manufacture"
        value={car.manufacture}
        onChange={handleChange}
      />
      <input
        type="text"
        name="model"
        placeholder="Model"
        value={car.model}
        onChange={handleChange}
      />
      <input
        type="number"
        name="rentPerDay"
        placeholder="Rent Per Day"
        value={car.rentPerDay}
        onChange={handleChange}
      />
      <input
        type="number"
        name="capacity"
        placeholder="Capacity"
        value={car.capacity}
        onChange={handleChange}
      />
      <input
        type="date"
        name="availableAt"
        placeholder="Available At"
        value={car.availableAt}
        onChange={handleChange}
      />
      <button className="edit-button" onClick={updateCar}>
        Update
      </button>
    </div>
  );
};

export default CarEdit;
