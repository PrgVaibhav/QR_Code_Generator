import { useState } from "react";
import styles from "../styles/Input.module.scss";
import axios from "axios";
const Input = () => {
  const [input, setInput] = useState(null);
  const [response, setResponse] = useState(null);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const url = `http://api.qrserver.com/v1/create-qr-code/?data=${input}&size=100x100`;

  const handleClick = async () => {
    if (!input) return alert("Please enter a value"); // if the input is empty, alert the user

    try {
      const res = await axios.get(url); // get the response from the api
      setResponse(res.data); // set the response to the state
    } catch (err) {
      console.log(err);
    }
  };

  const imageDownloadHandler = () => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "QRCode.png";
    link.click();
  };
  return (
    <>
      <section className={styles.form_container}>
        <input
          type="text"
          placeholder="Enter a link, number or any text to generate the QR Code"
          onChange={inputChangeHandler}
          aria-label="Enter a link, number or any text to generate the QR Code"
          aria-required="true"
          aria-describedby="input-description"
        />
        <button
          type="submit"
          aria-label="Generate QR Code"
          onClick={handleClick}
        >
          {" "}
          Generate{" "}
        </button>
      </section>

      {response && (
        <section className={styles.qr_container}>
          <img src={url} alt="QR Code" />
          <a
            type="button"
            className={styles.download}
            aria-label="Download QR Code"
            onClick={imageDownloadHandler}
            download={url}
          >
            <button>Download</button>
          </a>
        </section>
      )}
    </>
  );
};

export default Input;
