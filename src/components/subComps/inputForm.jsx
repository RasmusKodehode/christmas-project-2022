import React from "react";
import { useState } from "react";

export function InputForm(props) {
  const [greet, setGreet] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    if (!greet) {
      //if the user doesn't type anything, a greeting won't be logged
      alert("You can't send an empty message!");
    } else {
      //when the user enters a greeting and submits, the element will be created, and the text inside the input field resets
      console.log(greet);
      props.addGreet(greet);
      setGreet("");
    }
  }

  function handleChange(event) {
    //as the user types, the input text is updated, ready to be submitted
    setGreet(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={greet} onChange={handleChange} />
      <button type="submit">Add greeting</button>
    </form>
  );
}
