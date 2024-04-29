import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./CreateUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const createUserHandler = (event) => {
    event.preventDefault();
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Неправильний ввід даних",
        message: "Ці поля не можуть бути пустими",
      });
      return;
    }
    if (+inputAge < 1) {
      setError({
        title: "Неправильний вік",
        message: "Вік повинен бути більшим за 0",
      });
      return;
    }
    // console.log(inputName, inputAge);
    props.onCreateUser(inputName, inputAge);
    setInputName("");
    setInputAge("");
  };

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <label htmlFor="name">Ім'я</label>
          <input
            id="name"
            type="text"
            onChange={nameChangeHandler}
            value={inputName}
          ></input>
          <label htmlFor="age">Вік</label>
          <input
            id="age"
            type="text"
            onChange={ageChangeHandler}
            value={inputAge}
          ></input>
          <Button type="submit">Добавити користувача</Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateUser;
