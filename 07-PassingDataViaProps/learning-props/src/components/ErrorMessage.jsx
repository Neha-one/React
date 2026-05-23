//here {items} is the prop that we are passing from the parent component to this child component. We are using destructuring to extract the items prop from the props object. Then we are checking if the length of the items array is 0, if it is then we are rendering a message "Still hungry". If there are items in the array, then nothing will be rendered.



const ErrorMessage = ({ Eitems }) => {


  return (
    <>
      {Eitems.length === 0 && <h3>Still hungry</h3>}
    </>
  )
}
export default ErrorMessage;