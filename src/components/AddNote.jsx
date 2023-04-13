import { useState } from "react";

const AddNote = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      onAddNote(noteText);
    }
    setNoteText("");
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      />
      <div className="note-footer">
        <small>200 Remaining</small>
        <button onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
