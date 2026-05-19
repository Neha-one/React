function RandomNumber() {
  let randomNo = Math.random() * 100;
  return (
    <h3 style={{ "background-color": "#478" }}>
      Random number is {Math.round(randomNo)}
    </h3>
  );
}
export default RandomNumber;
