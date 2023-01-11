import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { GreetItem } from "./subComps/greetItem";
import { InputForm } from "./subComps/inputForm";

//variables defined to create timestamp on messages
const timeStamp = new Date();
const year = timeStamp.getFullYear();
const month = timeStamp.getMonth() + 1;
const day = timeStamp.getDate();
const hour = timeStamp.getHours();
const minute = timeStamp.getMinutes();
const second = timeStamp.getSeconds();

export function GreetingList(props) {
  //when the page is loaded, it checks localstorage if any messages are there, if not it takes the predefined messages from props.tasks
  const [greetings, setGreetings] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || props.tasks;
  });

  useEffect(() => {
    //every time a new greeting is added, it is added to localstorage
    localStorage.setItem("items", JSON.stringify(greetings));
    console.log(localStorage.getItem("items"));
  }, [greetings]);

  function addGreet(greet) {
    //when the user submits a message, an object is created and added to the array of previous messages, with appropiate tags
    const newGreeting = {
      id: `${day < 10 ? `0${day}` : day}.${
        month < 10 ? `0${month}` : month
      }.${year}, ${hour < 10 ? `0${hour}` : hour}:${
        minute < 10 ? `0${minute}` : minute
      }:${second < 10 ? `0${second}` : second}`,
      greeting: greet,
      keyID: `item-${nanoid()}`,
    };
    setGreetings([...greetings, newGreeting]);
  }

  //takes the message objects and turns them into a card to be displayed
  const taskList = greetings.map((task) => (
    <GreetItem id={task.id} greeting={task.greeting} key={task.key} />
  ));

  return (
    <>
      <h1>Enter a christmas greeting!</h1>
      <InputForm addGreet={addGreet} />
      <div className="list">{taskList}</div>
    </>
  );
}
