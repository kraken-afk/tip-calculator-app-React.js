import React from "react";
import Context from "../Context";

class SelectTip extends React.Component {
  constructor() {
    super();

    this.state = {
      box: [5, 10, 15, 25, 50],
    };
  }
  render() {
    return (
      <div className="selectTip">
        <label>
          Select Tip <small>%</small>
        </label>
        <Context.Consumer>
          {({ tipClickHandle, boxRef, tipKeyUP, tipRef }) => {
            const element = this.state.box.map((e) => (
              <div
                onClick={tipClickHandle}
                className="box"
                key={e}
                data-value={e}
              >
                {e}%
              </div>
            ));
            return (
              <div className="option" ref={boxRef}>
                {element}
                <input
                  ref={tipRef}
                  onFocus={() => {
                    boxRef.current.childNodes.forEach((e) =>
                      e.classList.remove("selected")
                    );
                  }}
                  onKeyUp={tipKeyUP}
                  onBlur={(event) => {
                    if (event.target.value < 0) event.target.value = String();
                    event.target.classList.remove("err");
                  }}
                  type="number"
                  className="box"
                  placeholder="Custom"
                />
              </div>
            );
          }}
        </Context.Consumer>
      </div>
    );
  }
}

export default SelectTip;
