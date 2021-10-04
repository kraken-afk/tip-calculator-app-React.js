import Context from "../Context";

const ResetBtn = () => {
  return (
    <Context.Consumer>
      {({ reset, resetHandler }) => (
        <button
          onClick={resetHandler}
          ref={reset}
          type="submit"
          className="reset"
        >
          RESET
        </button>
      )}
    </Context.Consumer>
  );
};

export default ResetBtn;
