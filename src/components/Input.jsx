import React from "react";
import Bill from "./inputFragments/Bill";
import SelectTip from "./inputFragments/SelectTip";
import NOP from "./inputFragments/NOP";

class Input extends React.Component {
  render() {
    return (
      <div className="input">
        <Bill />
        <SelectTip />
        <NOP />
      </div>
    );
  }
}

export default Input;
