import styles from "../sass/QC.module.scss";
import Response from "./Response";
export default function QuestionContainer() {
  return (
    <div className={styles.container}>
      <h3 className={styles.question}>
        Which of the below statements ar true about electrcity
      </h3>
      {[1, 2, 3].map((i) => (
        <Response key={i} name={i} />
      ))}
    </div>
  );
}
