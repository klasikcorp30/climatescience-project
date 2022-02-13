import styles from "../sass/QC.module.scss";
import Response from './Response'
export default function QuestionContainer(): JSX.Element {

  let responses = [
    {
      position: 1,
      response: "Electricity is measured in units called watts."
    },{
      position: 2,
      response: "Electricity flows at the speed of light"
    },
    {
      position: 3,
      response: "Electricity is a primary enery source"
    }
  ];
  return (
    <div className={styles.container}>
      <h3 className={styles.question}>
        Which of the below statements ar true about electrcity
      </h3>
      {responses?.map((r) => 
      <Response position={r.position} response={r.response} key={r.position}  />
    
        )}
    </div>
  );
}
