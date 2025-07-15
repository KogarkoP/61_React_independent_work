import Header from "@/components/header/header";
import InsertForm from "@/components/InsertForm/InsertForm";
import Card from "@/components/card/card";
import Footer from "@/components/footer/footer";
import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./styles.module.css";

const GalleryPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    const response = await axios.get(
      "https://680948651f1a52874cdc70cf.mockapi.io/cars"
    );
    setCars(response.data);
    setLoading(false);
  };

  const postCar = async (car) => {
    const response = await axios.post(
      "https://680948651f1a52874cdc70cf.mockapi.io/cars",
      car
    );

    if (response.status === 201) {
      fetchCars();
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.content_wrapper}>
        <InsertForm postCar={postCar} />
        {isLoading ? (
          <div className={styles.loader_wrapper}>
            <div className={styles.loader}></div>
          </div>
        ) : cars ? (
          <div className={styles.cars_wrapper}>
            {cars.map((car) => {
              return <Card key={car.id} car={car} />;
            })}
          </div>
        ) : (
          <div>No Cars Found</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;
