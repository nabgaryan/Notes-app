import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const eyj1 = document.getElementsByTagName("H1")[0];
    if (darkMode) {
      document.body.style.backgroundColor = "black";
      eyj1.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      eyj1.style.color = "black";
    }
  }, [darkMode]);

  useEffect(() => {
    if (localStorage.getItem("set-notes") !== null) {
      const parsed = JSON.parse(localStorage.getItem("set-notes"));
      setNotes(parsed);
    }
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("set-notes", JSON.stringify(notes));
    }
    if (notes.length === 0) {
      localStorage.clear();
    }
  }, [notes]);

  const addNoteHandler = (text) => {
    const localDate = new Date().toLocaleDateString();
    const newNote = {
      text: text,
      date: localDate,
      id: nanoid(),
    };
    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
  };

  const deleteNoteHandler = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const toggleModeHandler = () => {
    setDarkMode(!darkMode);
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchText)
  );

  return (
    <div className="container">
      <Header modeHandler={toggleModeHandler} />
      <Search onSearch={setSearchText} />
      <NotesList
        onDeleteNote={deleteNoteHandler}
        onAddNote={addNoteHandler}
        notes={filteredNotes}
      />
    </div>
  );
}

export default App;
