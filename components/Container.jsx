import styles from "../styles/Container.module.scss";
import Input from "./Input";

const Container = () => (
  <>
    <section className={styles.container}>
      <h1>QR CODE GENERATOR</h1>
      <p>Generate QR Code for any link or anonymous messages.</p>
      <p>
        <strong>How to use:</strong> Enter a link, number or any text to
        generate the QR Code
        <strong>
          This tool is just for fun, don't use it for any bad purposes.
        </strong>
      </p>
    </section>
    <Input />
  </>
);

export default Container;
