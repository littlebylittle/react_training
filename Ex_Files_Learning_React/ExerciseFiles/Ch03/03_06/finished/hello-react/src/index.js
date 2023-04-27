import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const list = [1, 2, 3, 4, 5];

function App({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.toString()}>{item}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(
  <App items={list} />,
  document.getElementById("root")
);
