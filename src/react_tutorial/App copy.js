import './App.css';
import { PropTypes } from "prop-types";
import Info from "../info.js"; //if in info.js it's written as "export default function..." then no need for the curly brackets
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Info title = "Schnappi" />
      <ButtonState />
      {/* <AddItem text="schnappi is great" number={2} />
      <AddItem text="Yo" /> */}
    </div>
  );
}

// To understand what is a state:
function ButtonState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  const updateTitleClicked = () => {
    setTitle("We now have a title!")
  };

  const updateCounterClicked = () => {
    setCount(count + 1)
  }; // when these functions are called, the part in the return area will be rerendered

  return (
    <div>
      {/* <p>Title: {title}</p>
      <p>Counter: {count}</p> */}
      <Data title={title} count={count}/>
      <button onClick={updateTitleClicked}>Update Title</button>
      <button onClick={updateCounterClicked}>Update Counter</button>
    </div>
  )
};

function Data(props) {
  return (<div>
    <p>Title: {props.title}</p>
    <p>Count: {props.count}</p>
  </div>)
}

// To understand what are props and propTypes
// function AddItem(props) { //props can also be decomposed and written like { text, number}

//   // const value = props.text;

//   return (
//     <form>
//       <label for ="text-form">Type something: </label>
//       <input type = "text" value = {props.text} id="text-form" />
//       <p>{ props.number }</p>
//     </form>
//   )
// }

// AddItem.defaultProps = {
//   number : 2,
//   text : "default",
// };

// AddItem.propTypes = { // define what type of the property it should be
//   number: PropTypes.number,
//   text: PropTypes.string,
// };

export default App;
