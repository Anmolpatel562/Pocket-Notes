import "./App.css";
import NoteList from "./components/NoteList";
import NoteNoteSelected from "./components/NoteNoteSelected";
import Lock from "./image/lock.png";
import Media from "react-media";
import { useState,useEffect } from "react";
import NoteSelected from "./components/NoteSelected";

function App() {
  const [noteSelected, setNoteSelected] = useState(false);
  let noteListClicked = noteSelected ? " noteNotSelected" : null;
  let [selectedNote, setSelectedNote] = useState(null);
  useEffect(()=>{

  })
  const [listArray, setListArray] = useState([
    {
      name: "My Notes",
      text: [],
    },
    {
      name: "My Personal grp",
      text: [],
    },
    {
      name: "Javascript grp",
      text: [],
    },
    {
      name: "HTML grp",
      text: [],
    },
    {
      name: "CSS Notes",
      text: [],
    },
    {
      name: "SQL Notes",
      text: [],
    },
    {
      name: "Python Notes",
      text: [],
    }
  ]);

  return (
    <div className="App">
      <Media query="(max-width:410px)">
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
                  <NoteSelected selectedNote={selectedNote} listArray={listArray} setListArray={setListArray}/>
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
