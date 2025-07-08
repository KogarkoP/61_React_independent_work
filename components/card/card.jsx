import styles from "./styles.module.css";

const Card = ({ car }) => {
  console.log(car);
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.car_img_wrapper}>
        <img src={car.carImg} alt={car.carModel} />
      </div>
      <h3>{car.carModel}</h3>
      <div className={styles.car_data}>
        <span>{`Production years: ${car.productionYear}`}</span>
        <span>{`Engine: ${car.engine}`}</span>
        <span>{`Power: ${car.powerKw} kW`}</span>
        <span>{`Fuel: ${car.fuel}`}</span>
      </div>
    </div>
  );
};

export default Card;
