import styles from "../sass/Response.module.scss";


export default function Response(response:any): JSX.Element {
  return (
    <div className={`${styles.response} ${styles[`slideAnimation${response.position}`]}`}>
      <label className={styles.inputContainer}>
        <input type="radio" name={"Answer"} />
        <span className="checkmark"></span>
      </label>
     <p>{response.response}</p>
     
    </div>
  );
}
