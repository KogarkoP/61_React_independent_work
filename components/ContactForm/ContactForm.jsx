import { useState } from "react";
import styles from "./styles.module.css";

const ContactForm = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [isChecked, setCheck] = useState(false);

  const buttonHandle = () => {
    if (!title || !name || !content) {
      alert("Fill in all fields");
      return;
    }
    if (!isChecked) {
      alert("Please check the checkbox");
      return;
    } else {
      const newMail = {
        title: title,
        name: name,
        content: content,
      };

      console.log(newMail);
    }
  };

  return (
    <div className={styles.content_wrapper}>
      <p className={styles.message}>
        Welcome to the Audi Car Archive – your go-to source for detailed
        information on Audi models throughout the years. Explore specifications,
        production details, updates, and more – all in one place. If you have
        any questions, can't find a specific model, or just want to know more –
        don’t hesitate to get in touch! We're here to help and provide you with
        the information you need.
        <br />
        <strong>📩 Contact us today – your Audi journey starts here!</strong>
      </p>
      <div className={styles.contact_form_wrapper}>
        <div className={styles.form}>
          <div className={styles.full_row}>
            <label htmlFor="letter_title">Title</label>
            <input
              id="letter_title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.full_row}>
            <label htmlFor="sender_name">Name</label>
            <input
              id="sender_name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.full_row}>
            <label htmlFor="letter_content">Message</label>
            <textarea
              id="letter_content"
              placeholder="Write Your Message Here"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className={`${styles.full_row} ${styles.checkbox}`}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setCheck(e.target.checked)}
            />
            <label htmlFor="letter_content">
              I agree to be contacted later
            </label>
          </div>
          <button className={styles.submit_bttn} onClick={buttonHandle}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
