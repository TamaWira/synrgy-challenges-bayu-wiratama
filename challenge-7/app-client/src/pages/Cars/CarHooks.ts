import axios from "axios";
import { ICars } from "./CarTypes";
import { useEffect, useState } from "react";

export default function useList() {
  const [cars, setCars] = useState<ICars[]>([]);

  const fetchCars = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/cars");
      setCars(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return cars;
}
