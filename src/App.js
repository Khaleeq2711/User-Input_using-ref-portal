import React, { useState } from "react";

import "./App.css";

import InputForm from "./components/InputForm";
import OutputList from "./components/OutputList";

function App() {
  const items = [];

  const [users, setUsers] = useState(items);
  const [empty, setEmpty] = useState("");

  const inputHandler = (user) => {
    user = { ...user, id: Math.random().toString() };
    setUsers([user, ...users]);
    setEmpty("something");
  };
  console.log(users);

  return (
    <div className="App">
      {/*Build in Wrapper Component of React,,      <>  </>    <Fagment>   */}
      <h1>
        <u>User Input</u>
      </h1>
      <InputForm inputHandler={inputHandler} />
      {empty ? (
        <div className="userData-main">
          <OutputList users={users} />
        </div>
      ) : (
        <h1>User List Empty...</h1>
      )}
    </div>
  );
}

export default App;
