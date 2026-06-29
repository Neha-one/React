function Focus({ FocusinputRef, handleClick }) {

  
  return <>
    <input ref={FocusinputRef} type="text" />
    <button onClick={handleClick}>Focus Input</button>
  </>
}
export default Focus;