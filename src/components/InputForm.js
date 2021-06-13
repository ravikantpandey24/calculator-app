import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";

function InputForm({ title }) {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  function onChangeFirstNumber(event) {
    setFirstNumber(Number(event.target.value));
  }

  function onChangeSecondNumber(event) {
    setSecondNumber(Number(event.target.value));
  }

  function onClickCalculatebutton() {
    setResult(firstNumber + secondNumber);
  }

  return (
    <div className="card">
      <div className="card-heading mt-3">
        <h3 className="card-title text-center">{title}</h3>
      </div>
      <div className="card-body">
        <InputField
          label="First Number"
          type="number"
          className="form-control"
          id="firstNumber"
          placeholder="0"
          value={firstNumber}
          onChange={onChangeFirstNumber}
        />

        <InputField
          label="Second Number"
          type="number"
          className="form-control"
          id="secondNumber"
          placeholder="0"
          value={secondNumber}
          onChange={onChangeSecondNumber}
        />
        <div className="mb-3">
          <Button
            className="btn btn-outline-primary form-control"
            text="Calculate"
            onClick={onClickCalculatebutton}
          ></Button>
        </div>
        <InputField
          label="Result"
          id="resultField"
          type="number"
          placeholder="0"
          value={result}
          onChange={function () {}}
        />
      </div>
    </div>
  );
}
export default InputForm;
