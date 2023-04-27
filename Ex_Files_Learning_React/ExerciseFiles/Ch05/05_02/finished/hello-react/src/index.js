import React, {
  useState,
  useEffect
} from "react";
import ReactDOM from "react-dom";
import "./index.css";

function GitHubUser({ login }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (data) {
    return (
      <div>
        <h1>{data.login}</h1>
        <img src={data.avatar_url} width={100} />
      </div>
    );
  }
  return null;
}

function App() {
  return <GitHubUser login="moontahoe" />;
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
