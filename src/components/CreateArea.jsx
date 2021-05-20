import React, { useState } from "react";
import Note from "./Note";
import App from "./App";
function CreateArea(props) {
  const [text, setText] = useState({ title: "", content: "" }); // put anything and this will be overwritten first time only

  function addNote(event) {
    event.preventDefault();
    console.log(text.title);
    console.log(text.content);
    props.onC(text);
    setText({ title: "", content: "" })
    
  }

  function update(event) {
    var p = event.target.value;
    var name = event.target.name;
    if (name === "title") setText({ title: p, content: text.content });
    else setText({ title: text.title, content: p });
  }
  return (
    <div>
      <form action="">
        <input value ={text.title} onChange={update} name="title" placeholder="Title" />
        <textarea
        value = {text.content}
          onChange={update}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        {/* this onclick event takes a callback which work to pass the notevalue back to app  */}
        <button  onClick={addNote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
