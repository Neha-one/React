//here styles is an object we can use any other name like css .
import styles from "../cssModule/Item.module.css";

const Item = ({ itemName }) => {

  return (
    <>

      <li className={`${styles['kg-item']} `} >
        <span className={styles['kg-span']}>  {itemName}</span>
      </li>

    </>
  )
}
export default Item;



// //here styles is an object we can use any other name like css .
// import styles from "../cssModule/Item.module.css";

// const Item = ({ itemName }) => {

//   return (
//     <>

//       <li className={`${styles['kg-item']} `} >       {/*method-01 to apply css module. */}
//         {/* <li className={style.container} >     method-01 to apply css module. and here container is use to as example there is no contaiener className. */}


//         <span className={styles['kg-span']}>        {/* method-02 to apply css module. */}
//           {itemName}</span>
//       </li>

//     </>
//   )
// }
