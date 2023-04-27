import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Lake() {
  return <h1>Lake!</h1>;
}

function SkiResort() {
  return <h1>Ski Resort!</h1>;
}

function App({ name }) {
  return (
    <>
      <h1>{name}</h1>
      <Lake />
      <SkiResort />
    </>
  );
}

ReactDOM.render(
  <App name="GraphQL" />,
  document.getElementById("root")
);

const [, , fruit] = [
  "popcorn",
  "pretzels",
  "pineapple"
];

console.log(fruit);
