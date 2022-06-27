import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Image from "./Image";
import note from "../notes";
function createNote(noteitem) {
  return <Note title={noteitem.title} content={noteitem.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {note.map(createNote)}
      <Footer />
      {/* <Image /> */}
    </div>
  );
}

export default App;
