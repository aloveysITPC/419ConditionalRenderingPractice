import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <h1>Hello</h1> : <Form />}
    </div>
  );
}

export default App;
