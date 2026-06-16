import styles from '../cssModule/CourseInput.module.css';

const CourseInput = () => {
  
  const handleOnChange = (event) => {
    console.log(event.target.value)
  };
  return (
    <input className={styles.courseip} type="text" placeholder="Enter your course here.."
      onChange={handleOnChange}
    />
  )
}
export default CourseInput; 