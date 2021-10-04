import React from "react";
import Context from "../Context";

const Result = () => {
  return (
    <React.Fragment>
      <Context.Consumer>
        {({ resRef, totRes }) => {
          return (
            <div className="resContainer">
              <div className="resWrap">
                <div className="resTitle">
                  <h3>Tip Amount</h3>
                  <span>/ Person</span>
                </div>
                <div className="res">
                  $<span ref={resRef}>0.00</span>
                </div>
              </div>
              <div className="resWrap">
                <div className="resTitle">
                  <h3>Total Amount</h3>
                  <span>/ Person</span>
                </div>
                <div className="res">
                  $<span ref={totRes}>0.00</span>
                </div>
              </div>
            </div>
          );
        }}
      </Context.Consumer>
    </React.Fragment>
  );
};

export default Result;
