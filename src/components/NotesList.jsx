import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, onAddNote, onDeleteNote }) => {
  return (
    <div className={notes.length <= 1 ? `notes-list-` : "notes-list"}>
      {notes.map((note) => (
        <Note
          onDeleteNote={onDeleteNote}
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
        />
      ))}
      <AddNote onAddNote={onAddNote} />
    </div>
  );
};

export default NotesList;
