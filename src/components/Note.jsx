import React, { useState } from "react";

function Note(props) {
  function delet() {
    return props.callbac(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={delet}>DELETE</button>
    </div>
  );
}

export default Note;
