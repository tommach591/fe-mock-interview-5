import Dropdown from "./Dropdown";
import { useState } from "react";
import "./App.css";

function App() {
  const [list] = useState([
    "Apples",
    "Oranges",
    "Peaches",
    "Pears",
    "Cherries",
    "Melons",
    "Bananas",
  ]);

  return (
    <div>
      <h1 className="Header">Lorem ipsum dolor.</h1>
      <Dropdown list={list} />
      <p className="Paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}

export default App;
