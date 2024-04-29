import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  //   const [userInput, setUeserInput] = useState({
  //     name: "",
  //     amount: "",
  //     date: "",
  //   });

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
    // setUeserInput({
    //   ...userInput,
    //   name: event.target.value,
    // });
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
    // setUeserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    // setUeserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
    // setUeserInput((previosState) => {
    //   return {
    //     ...previosState,
    //     name: event.target.value,
    //   };
    // });
  };

  const submitHander = (event) => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHander}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Назва</label>
          <input onChange={nameChangeHandler} type="text" value={inputName} />
        </div>
        <div className="new-cost__control">
          <label>Сума</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2021-01-01"
            step="2024-03-31"
            value={inputDate}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавити Витрати</button>
          <button type="button" onClick={props.onCancel}>
            Відміна
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
