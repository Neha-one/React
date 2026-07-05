import styles from "../cssModule/WelcomMsg.module.css";
const WelcomMsg = ({ handleFetchOnClick }) => {
  return (
    <center className={styles.welcomMsg}>
      <h2>Hey there are no post</h2>
    </center>
  )
};
export default WelcomMsg;