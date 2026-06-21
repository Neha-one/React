const ErrorMessage = ({ ItemList }) => {
  return (
    <>
      {/* {ItemList.length === 0 && <h3>No more course available</h3>
      
      } */}
      {ItemList?.length === 0 && <h3>No more course available</h3>}
    </>
  )

}
export default ErrorMessage;