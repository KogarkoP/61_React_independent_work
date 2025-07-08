import styles from "./styles.module.css";
import mainImg from "@/assets/images/main.png";
import Link from "next/link";

const Main = () => {
  return (
    <div className={styles.page_wrapper}>
      <h1>The Complete History of Audi Cars</h1>
      <div className={styles.img_wrapper}>
        <img src={mainImg.src} alt="Audi" />
      </div>
      <p>
        Explore every Audi model ever built — from early innovations to modern
        masterpieces. Dive into decades of design, performance, and engineering
        excellence that shaped one of the world’s most iconic automotive brands
      </p>
      <Link className={styles.button} href="/gallery">
        Lets explore!!
      </Link>
    </div>
  );
};

export default Main;
