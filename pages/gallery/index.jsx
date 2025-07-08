import Header from "@/components/header/header";
import Card from "@/components/card/card";
import Footer from "@/components/footer/footer";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const GalleryPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCars = async () => {
    const response = await axios.get(
      "https://680948651f1a52874cdc70cf.mockapi.io/cars"
    );
    setCars(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <div className={styles.loader_wrapper}>
          <div className={styles.loader}></div>
        </div>
      ) : (
        <div className={styles.content_wrapper}>
          {cars.map((car) => {
            return <Card key={car.id} car={car} />;
          })}
        </div>
      )}
      <Footer />
    </>
  );
};

export default GalleryPage;
