import Link from "next/link";
import ROUTES from "@/routes/routes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_nav}>
          <h2>Pages</h2>
          <ul>
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
        <div className={styles.social_media}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
