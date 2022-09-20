import "./Dropdown.css";
import { useState } from "react";

function Dropdown({ list }) {
  const [focused, setFocus] = useState(false);
  return (
    <div className="Dropdown">
      <select
        name="item"
        id="item"
        defaultValue="none"
        onChange={() => {
          var e = document.getElementById("item");
          e.blur();
        }}
        onClick={() => {
          var e = document.getElementById("item");
          if (focused) {
            e.blur();
          } else e.focus();
          setFocus(!focused);
        }}
      >
        <option value="none" disabled hidden>
          Please select an item
        </option>
        {list.map((e) => {
          return (
            <option key={e} value={e}>
              {e}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;
