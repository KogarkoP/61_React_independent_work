import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Contacts from "@/components/contacts/contacts";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./styles.module.css";

const ContactsPage = () => {
  return (
    <>
      <Header />
      <div className={styles.content_wrapper}>
        <ContactForm />
        <Contacts />
      </div>
      <Footer />
    </>
  );
};

export default ContactsPage;
