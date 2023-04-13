import { AiTwotoneDelete } from "react-icons/ai";

const Note = ({ id, text, date, onDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <AiTwotoneDelete onClick={() => onDeleteNote(id)} className="icon" />
      </div>
    </div>
  );
};

export default Note;
