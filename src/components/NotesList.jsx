import AddNote from "./AddNote";
import Note from "./Note";
import { useEffect, useState } from "react";

const NotesList = ({ notes, onAddNote, onDeleteNote }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const width = windowSize.innerWidth;

  return (
    <div
      className={
        notes.length <= 1 || width < 600 ? `notes-list-` : "notes-list"
      }
    >
      <AddNote onAddNote={onAddNote} />
      {notes.map((note) => (
        <Note
          onDeleteNote={onDeleteNote}
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
        />
      ))}
    </div>
  );
};

export default NotesList;
