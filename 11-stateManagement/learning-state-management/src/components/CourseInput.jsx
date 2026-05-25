import styles from '../cssModule/CourseInput.module.css';

const CourseInput = ({ handleKeyDown }) => {

  return (
    <input className={styles.courseip} type="text" placeholder="Enter your course here.."
      onKeyDown={handleKeyDown}
    />
  )
}
export default CourseInput;