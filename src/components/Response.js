import styles from "../sass/Response.module.scss";

export default function Response({ name }) {
  return (
    <div className={`${styles.response} ${styles[`slideAnimation${name}`]}`}>
      <label className={styles.inputContainer}>
        <input type="radio" name={"Answer"} />
        <span className="checkmark"></span>
      </label>
      lorem ipsum dolor sit amet consectetur adipirrrsicing elit.
    </div>
  );
}
