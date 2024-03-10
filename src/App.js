import "./App.css";
import NoteList from "./components/NoteList";
import NoteNoteSelected from "./components/NoteNoteSelected";
import Lock from "./image/lock.png";
import Media from "react-media";
import { useState } from "react";
import NoteSelected from "./components/NoteSelected";

function App() {
  const [noteSelected, setNoteSelected] = useState(false);
  let noteListClicked = noteSelected ? " noteNotSelected" : null;
  let [selectedNote, setSelectedNote] = useState(null);

  return (
    <div className="App">
      <Media query="(max-width:450px)">
        {(matches) => {
          return matches ? (
            <NoteList
              noteSelected={noteSelected}
              setNoteSelected={setNoteSelected}
            />
          ) : (
            <>
              <NoteList
                noteSelected={noteSelected}
                setNoteSelected={setNoteSelected}
                selectedNote={selectedNote}
                setSelectedNote={setSelectedNote}
              />
              <div className="noteScreen">
                <NoteNoteSelected noteListClicked={noteListClicked} />
                {noteListClicked ? (
                  <NoteSelected selectedNote={selectedNote} />
                ) : (
                  <></>
                )}
                <div className={noteListClicked}>
                  <div className="security">
                    <img className="lockImg" src={Lock}></img>
                    <p>end-to-end encrypted</p>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </Media>
    </div>
  );
}

export default App;
