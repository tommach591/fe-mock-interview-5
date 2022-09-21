import "./Dropdown.css";
import { useState } from "react";

function Dropdown({ list }) {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState("");

  function toggleActive() {
    setActive(!active);
  }

  function selectedAnOption(choice) {
    setSelected(choice);
    toggleActive();
  }

  return (
    <div className="Dropdown">
      <div className="Bar" onClick={toggleActive}>
        {selected === "" ? "Please select an item" : selected}
        <div className={active ? "ArrowUp" : "ArrowDown"}></div>
      </div>
      <div className={active ? "ShowOptions" : "HideOptions"}>
        <div className="OuterTriangle"></div>
        <div className="Options">
          {list.map((e) => {
            return (
              <div className="Choice" onClick={() => selectedAnOption(e)}>
                {e}
              </div>
            );
          })}
        </div>
        <div className="InnerTriangle"></div>
      </div>
      <div className={selected === "" ? "HideClearButton" : "ShowClearButton"}>
        <div className="ClearButton" onClick={() => setSelected("")}>
          x
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
