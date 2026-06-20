function Input({ShowInputRef,handleShowOnClick}){
  return <>
  <input ref={ShowInputRef} type="text" />
  <button onClick={handleShowOnClick}>Show Value
  </button>
  </>
}
export default Input;