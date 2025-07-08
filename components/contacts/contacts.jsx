import styles from "./styles.module.css";

const Contacts = () => {
  return (
    <div className={styles.content_wrapper}>
      <iframe
        title="Google Map"
        width="100%"
        height="600"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ettinger%20Str.,%2085045%20Ingolstadt,%20%D0%93%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      />
      <div className={styles.address}>
        <h2>Address</h2>
        <ul>
          <li>Address: Ettinger Str., 85045 Ingolstadt, Germany</li>
          <li>
            Phone: <a href="tel:+498002834444">+498002834444</a>
          </li>
          <li>
            Email: <a href="mailto:somewhere@gmail.com">audi@audi.de</a>
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
