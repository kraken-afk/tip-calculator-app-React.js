import React from "react";
import Context from "../Context";

const Bill = () => {
  return (
    <div className="billWrapper">
      <label htmlFor="bill">Bill</label>
      <Context.Consumer>
        {(value) => {
          const { billKeyUp } = value;
          return (
            <input
              onBlur={(e) => {
                if (e.target.value < 0) e.target.value = String();
                e.target.classList.remove("err");
              }}
              onKeyUp={billKeyUp}
              type="number"
              id="bill"
              placeholder="0"
              ref={value.inputB}
            />
          );
        }}
      </Context.Consumer>
    </div>
  );
};

export default Bill;
