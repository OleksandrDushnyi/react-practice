import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./CreateUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [inputName, setInputName] = useState("");
  // const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const createUserHandler = (event) => {
    event.preventDefault();
    const inputUserName = nameInputRef.current.value;
    const inputUserAge = ageInputRef.current.value;
    if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
      setError({
        title: "Неправильний ввід даних",
        message: "Ці поля не можуть бути пустими",
      });
      return;
    }
    if (+inputUserAge < 1) {
      setError({
        title: "Неправильний вік",
        message: "Вік повинен бути більшим за 0",
      });
      return;
    }
    // console.log(inputName, inputAge);
    props.onCreateUser(inputUserName, inputUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // const nameChangeHandler = (event) => {
  //   setInputName(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setInputAge(event.target.value);
  // };

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
          <input id="name" type="text" ref={nameInputRef}></input>
          <label htmlFor="age">Вік</label>
          <input id="age" type="text" ref={ageInputRef}></input>
          <Button type="submit">Добавити користувача</Button>
        </form>
      </Card>
    </div>
  );
};

export default CreateUser;
