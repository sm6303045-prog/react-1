function Card(props) {
  console.log(props);
  return (
    <div>
      <h1> {props.Name} </h1>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2> Price: {props.Price} </h2>
    </div>
  );
}
export default Card;
