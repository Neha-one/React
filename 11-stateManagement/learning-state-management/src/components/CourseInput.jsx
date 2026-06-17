import styles from '../cssModule/CourseInput.module.css';

const CourseInput = ({ handleKeyDown}) => {

  return (
    <div className={styles.ipdiv}>

      <input className={styles.courseip} type="text" placeholder="Enter your course here.."
        onKeyDown={handleKeyDown}
      />
      {/* <button onClick={handleOnclick} className={`${styles.ipbtn} btn btn-danger`} type="button">Add</button> */}
    </div>

  )
}
export default CourseInput;