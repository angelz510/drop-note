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
    <div className="App">
      {allNotes.map((note, index) => (
        <div key={index}>
          <div>{note.text}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
