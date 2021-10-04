import Context from "../Context";
import React from "react";

const NOP = () => {
  return (
    <div className="nop">
      <label htmlFor="numberOP">Number Of People</label>
      <Context.Consumer>
        {(value) => {
          return (
            <React.Fragment>
              <input
                onKeyUp={value.nopKeyUp}
                onBlur={(e) => {
                  if (!e.target.value || e.target.value < 0) {
                    value.erz.current.style.opacity = 0;
                    e.target.classList.remove("err");
                    e.target.value = String();
                  }
                }}
                type="number"
                id="numberOP"
                placeholder="0"
                ref={value.inputN}
              />
              <small ref={value.erz} className="erz">
                Can't be zero or above
              </small>
            </React.Fragment>
          );
        }}
      </Context.Consumer>
    </div>
  );
};

export default NOP;
