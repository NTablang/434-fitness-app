import React from "react";

function ChoicesTab() {
  const [radioChoice, setRadioChoice] = React.useState("");
  const [dropdownChoice, setDropdownChoice] = React.useState("");

  return (
    <div>
      <h2>Choices</h2>
      <div>
      <h1>
          Is Water Wet?
        </h1>
        <input
          type="radio"
          id="yes"
          name="choice"
          value="yes"
          onChange={(e) => setRadioChoice(e.target.value)}
        />
        <label htmlFor="yes">Yes</label>

        <input
          type="radio"
          id="no"
          name="choice"
          value="no"
          onChange={(e) => setRadioChoice(e.target.value)}
        />
        <label htmlFor="no">No</label>
      </div>
     

      <div>
        <h1>
          Are you male or female?
        </h1>
        <select
          id="choices"
          name="choices"
          onChange={(e) => setDropdownChoice(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button
        onClick={() => {
          alert(`Is water wet: ${radioChoice}, Male or female: ${dropdownChoice}`);
        }}
      >
        Show choices
      </button>
    </div>
  );
}

export default ChoicesTab;
