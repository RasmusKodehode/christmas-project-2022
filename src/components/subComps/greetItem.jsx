import React from "react";

//returns a card with a greeting to be rendered
export function GreetItem(props) {
    return (
      <div className="list-item" id={props.id} key={props.keyID}>
        <p className="greeting-message">{props.greeting}</p>
        <br />
        <p>{props.id}</p>
      </div>
    );
}