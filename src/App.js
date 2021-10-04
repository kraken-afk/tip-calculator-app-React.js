import React from "react";
import "./css/main.css";
import Context from "./components/Context";
import Body from "./components/Body";
import Title from "./components/Title";

class App extends React.Component {
  constructor() {
    super();
    this.boxRef = React.createRef();
    this.erz = React.createRef();
    this.tipResRef = React.createRef();
    this.TotResRef = React.createRef();
    this.tipCRef = React.createRef();
    this.reset = React.createRef();
    this.inputB = React.createRef();
    this.inputN = React.createRef();

    this.state = {
      context: {
        billKeyUp: this.billKeyUp,
        tipClickHandle: this.tipClickHandle,
        boxRef: this.boxRef,
        erz: this.erz,
        resRef: this.tipResRef,
        totRes: this.TotResRef,
        nopKeyUp: this.nopKeyUp,
        tipKeyUP: this.tipKeyUp,
        tipRef: this.tipCRef,
        reset: this.reset,
        resetHandler: this.resetHandler,
        inputB: this.inputB,
        inputN: this.inputN,
      },
      bill: 0,
      tipPercent: 0,
      nop: 0,
    };
  }

  billKeyUp = (event) => {
    if (!event.target.value || event.target.value < 0) {
      event.target.classList.add("err");
      this.setState({ bill: 0 });
      return;
    }
    event.target.classList.remove("err");
    this.setState({ bill: parseFloat(event.target.value) });
  };

  tipClickHandle = (event) => {
    this.boxRef.current.childNodes.forEach((e) =>
      e.classList.remove("selected")
    );
    this.tipCRef.current.value = "";
    event.target.classList.add("selected");
    this.setState({ tipPercent: event.target.dataset.value });
  };

  tipKeyUp = (event) => {
    if (!event.target.value || event.target.value < 0) {
      event.target.classList.add("err");
      this.setState({ tipPercent: 0 });
      return;
    }
    event.target.classList.remove("err");
    this.setState({ tipPercent: parseFloat(event.target.value) });
  };

  nopKeyUp = (event) => {
    if (
      !event.target.value ||
      event.target.value < 0 ||
      parseInt(event.target.value) * 1 === 0
    ) {
      event.target.classList.add("err");
      this.erz.current.style.opacity = "1";
      this.setState({ nop: 0 }, () => null);
      return;
    }
    this.erz.current.style.opacity = "0";
    event.target.classList.remove("err");
    this.setState({ nop: parseFloat(event.target.value) });
  };

  resetHandler = () => {
    this.boxRef.current.childNodes.forEach((e) =>
      e.classList.remove("selected")
    );
    this.inputN.current.classList.remove("err");
    this.erz.current.style.opacity = "0";
    this.tipCRef.current.value = String();
    this.inputB.current.value = String();
    this.inputN.current.value = String();
    this.reset.current.style.opacity = "0.3";
    this.reset.current.style.pointerEvents = "none";
    this.setState({
      bill: 0,
      tipPercent: 0,
      nop: 0,
    });
  };

  componentDidUpdate() {
    const tipRef = this.tipResRef.current;
    const totRef = this.TotResRef.current;
    const { bill, tipPercent, nop } = this.state;
    if (bill || tipPercent || nop) {
      this.reset.current.style.opacity = "1";
      this.reset.current.style.pointerEvents = "all";
    } else {
      this.reset.current.style.opacity = "0.3";
      this.reset.current.style.pointerEvents = "nonr";
    }

    let tip = (bill * (tipPercent / 100)) / nop;
    let total = (bill + tip) / nop;
    if (isNaN(tip) || tip === Infinity || isNaN(total) || total === Infinity) {
      tip = "0.00";
      total = "0.00";
    }
    tipRef.textContent = Number(tip).toFixed(2);
    totRef.textContent = Number(total).toFixed(2);
  }

  render() {
    return (
      <React.Fragment>
        <Title />
        <Context.Provider value={this.state.context}>
          <Body />
        </Context.Provider>
      </React.Fragment>
    );
  }
}

export default App;
