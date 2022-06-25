import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="UserName" />
      <Input type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}

export default Form;
