import Link from "next/link";
import ROUTES from "@/routes/routes";
import Logo from "@/assets/images/audi-logo.svg";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (toggleMenu) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setToggleMenu(false);
        document.documentElement.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.documentElement.style.overflow = "auto";
      window.removeEventListener("resize", handleResize);
    };
  }, [toggleMenu]);

  return (
    <div className={styles.header}>
      <div className={styles.logo_con}>
        <Link href="/">
          <img src={Logo.src} alt="Home" />
        </Link>
      </div>
      <ul className={styles.header_nav}>
        <li>
          <Link href={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link href={ROUTES.GALLERY}>Gallery</Link>
        </li>
        <li>
          <Link href={ROUTES.CONTACTS}>Contacts</Link>
        </li>
      </ul>
      <div className={styles.menu_icon}>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setToggleMenu(!toggleMenu)}
        />
      </div>
      {toggleMenu && (
        <div className={styles.mobile_menu}>
          <FontAwesomeIcon
            className={styles.close_menu}
            icon={faClose}
            onClick={() => setToggleMenu(!toggleMenu)}
          />
          <ul className={styles.mobile_nav}>
            <li>
              <Link href={ROUTES.HOME}>Home</Link>
            </li>
            <li>
              <Link href={ROUTES.GALLERY}>Gallery</Link>
            </li>
            <li>
              <Link href={ROUTES.CONTACTS}>Contacts</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
