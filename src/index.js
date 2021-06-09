import * as React from "react";
import * as ReactDOM from "react-dom";

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>count: {count}</p>
      <button
        onClick={() => {
          debugger;
          setCount(count + 1);
        }}
      >
        count + 1
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

module.hot && module.hot.accept();
