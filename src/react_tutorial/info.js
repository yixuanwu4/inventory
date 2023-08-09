//Below is a react component
//can only return one element, so the <div> is crucial.

import React from "react";
import { PropTypes } from 'prop-types';


class Info extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count: 0,

    };
    //this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed() {
    this.setState({
      count: this.state.count + 1
    });
  }


  render() {
    // const title = "This is my title.";
    // const showTitle = true;
    // if (showTitle) {
    //   return (
    //     <div>
    //       <h1>{title}</h1>
    //       <p>Manage your stuff.</p>
    //     </div>
    //   );
    // } else {
    //   return <p>empty</p>;
    // }

    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick = {() => this.buttonPressed()}>Click Me!</button>
      </div>
      );
  }
}

// Info.defaultProps = {
//   title: "Default",
// }

// Info.propTypes = {
//   title: PropTypes.string,
// }

export default Info;
