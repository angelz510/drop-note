import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [allNotes, setAllNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const getAllNotes = async () => {
    try {
      const result = await axios.get("http://localhost:5050/api/notes");
      console.log(result.data);
      setAllNotes(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  const addNote = async (text) => {
    try {
      const result = await axios.post("http://localhost:5050/api/newnote", {
        text: text,
      });
      setNewNote(result.data.text);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="note-page">
      <form className="note-search">
        <textarea
          className="note-input"
          type="text"
          placeholder="Message"
          onChange={(e) => setNewNote(e.target.value)}
        ></textarea>
        <button onClick={() => addNote(newNote)} className="note-button">
          Submit
        </button>
      </form>
      <div className="note-container">
        {allNotes.map((note, index) => (
          <div key={index} className="note-card">
            <div className="note-text">{note.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
