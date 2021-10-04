import React from "react";
import Input from "./Input";
import Output from "./Output";

class Body extends React.Component {
  render() {
    return (
      <div className="container">
        <Input />
        <Output />
      </div>
    );
  }
}

export default Body;
