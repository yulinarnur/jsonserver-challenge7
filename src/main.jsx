import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CarList from "./components/CarList.jsx";
import CarAdd from "./components/CarAdd.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CarList />,
  },
  {
    path: "/car-add",
    element: <CarAdd />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
