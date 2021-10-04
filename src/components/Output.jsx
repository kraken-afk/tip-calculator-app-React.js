import React from "react";
import Result from "./outputFragments/Result";
import ResetBtn from "./outputFragments/ResetBtn";

class Output extends React.Component {
  render() {
    return (
      <div className="output">
        <Result />
        <ResetBtn />
      </div>
    );
  }
}

export default Output;
