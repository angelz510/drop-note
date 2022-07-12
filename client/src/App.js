import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  const getAllNotes = async () => {
    try {
      const result = await axios.get("http://localhost:5050/");
      console.log(result.data);
      setAllNotes(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return (
    <div className="note-page">
      <div className="note-search">
        <textarea
          className="note-input"
          type="text"
          placeholder="Message"
        ></textarea>
        <button className="note-button">Submit</button>
      </div>
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
