import { useState } from "react";
import styles from "./styles.module.css";

const ImportForm = ({ postCar }) => {
  const [carModel, setCarModel] = useState("");
  const [productionYear, setProductionYear] = useState("");
  const [powerKw, setPowerKw] = useState("");
  const [fuel, setFuel] = useState("");
  const [engine, setEngine] = useState("");
  const [carImg, setCarImg] = useState("");

  const [isLoading, setLoading] = useState(false);

  const buttonHandle = () => {
    if (
      !carModel ||
      !productionYear ||
      !powerKw ||
      !fuel ||
      !engine ||
      !carImg
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    const newCar = {
      carModel: carModel,
      productionYear: productionYear,
      powerKw: powerKw,
      fuel: fuel,
      engine: engine,
      carImg: carImg,
    };

    postCar(newCar);

    setCarModel("");
    setProductionYear("");
    setPowerKw("");
    setFuel("");
    setEngine("");
    setCarImg("");
    setLoading(false);
  };

  return (
    <div className={styles.insert_form_wrapper}>
      <div className={styles.full_row}>
        <label htmlFor="car_model">Car Model</label>
        <input
          id="car_model"
          type="text"
          placeholder="Car Model"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
        />
      </div>
      <div className={styles.full_row}>
        <label htmlFor="production_year">Production Year</label>
        <input
          id="production_year"
          type="text"
          placeholder="Production Year"
          value={productionYear}
          onChange={(e) => setProductionYear(e.target.value)}
        />
      </div>
      <div className={styles.full_row}>
        <label htmlFor="power_kw">Power Kw</label>
        <input
          id="power_kw"
          type="text"
          placeholder="Power Kw"
          value={powerKw}
          onChange={(e) => setPowerKw(e.target.value)}
        />
      </div>
      <div className={styles.full_row}>
        <label htmlFor="fuel">Fuel</label>
        <select
          id="fuel"
          value={fuel}
          onChange={(e) => setFuel(e.target.value)}
        >
          <option value="" disabled>
            Select Fuel Type
          </option>
          <option value="gasoline">Gasoline</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
          <option value="hybrid">Hybrid</option>
        </select>
      </div>
      <div className={styles.full_row}>
        <label htmlFor="engine">Engine</label>
        <input
          id="engine"
          type="text"
          placeholder="Engine"
          value={engine}
          onChange={(e) => setEngine(e.target.value)}
        />
      </div>
      <div className={styles.full_row}>
        <label htmlFor="car_img">Car Image URL</label>
        <input
          id="car_img"
          type="text"
          placeholder="Car Image URL"
          value={carImg}
          onChange={(e) => setCarImg(e.target.value)}
        />
      </div>
      <button
        disabled={isLoading}
        className={styles.submit_bttn}
        onClick={buttonHandle}
      >
        {isLoading ? <span className={styles.loader}></span> : "Submit"}
      </button>
    </div>
  );
};

export default ImportForm;
