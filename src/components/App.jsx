import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);

  function bringNote(note1) {
    setNote((preValue) => {
      console.log([...preValue, note1]);

      return [...preValue, note1];
    });
  }
  function printNote(note) {
    note.forEach((n) => {
      // forEACH actually doesnt return anything so no use of it
      return <Note title={n.title} content={n.content} />; // tried putting props={note}
    });
  }
  function passedToChildCallBack(id) {
    setNote((
      prev // using filter mwthod to remove element
    ) => prev.filter((item, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea onC={bringNote} />

      {note.map((n, index) => (
        <Note
          key={index}
          id={index}
          callbac={passedToChildCallBack}
          title={n.title}
          content={n.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
