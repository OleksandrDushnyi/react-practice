import React, { useState } from "react";
import CreateUser from "./components/Users/CreateUser";
import UserList from "./components/Users/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const creatrUserHandler = (name, age) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: name, age: age, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <CreateUser onCreateUser={creatrUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
