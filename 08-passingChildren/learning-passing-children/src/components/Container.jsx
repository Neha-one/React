import styles from "../cssModule/Container.module.css";
const Container = (props) => {
  return (
    // here props.children is used to access the children of the component and it is a special prop that is passed to every component. It can be used to access the children of the component and it is used to render the children of the component. 
    <div className={styles.container}>{props.children}</div>
  )
}
export default Container;