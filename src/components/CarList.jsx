import { useEffect, useState } from "react";
import "../styles/CarList.css";
const CarList = () => {
  const [cars, setcars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cars")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setcars(data);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted.");
        }
      });
  }, []);

  return (
    <div className="card-list">
      {cars.map((car) => (
        <div key={car.id} className="card">
          <img src={car.image} alt={car.model} />
          <h1>Manufacture: {car.manufacture}</h1>
          <h1>Model: {car.model}</h1>
          <h1>Rent Per Day: {car.rentPerDay}</h1>
          <h1>Capacity: {car.capacity}</h1>
          <h1>Available At: {car.availableAt}</h1>
        </div>
      ))}
    </div>
  );
};

export default CarList;
