import "./NoteList.css";
import { useState } from "react";
import ListComponent from "./ListComponent";

function NoteList({ selectedNote, setSelectedNote, setNoteSelected }) {
  const [list, setList] = useState([
    {
      name: "My Notes",
      color: "#0047FF",
    },
    {
      name: "My Personal grp",
      color: "#B38BFA",
    },
    {
      name: "Javascript grp",
      color: "#FFC0C0",
    },
    {
      name: "HTML grp",
      color: "#43E6FC",
    },
    {
      name: "CSS Notes",
      color: "#F19576",
    },
    {
      name: "SQL Notes",
      color: "#6691FF",
    },
    {
      name: "Python Notes",
      color: "#FF66F0",
    }
  ]);
  return (
      <div className="noteListContainer">
        <h1 className="appName">Pocket Notes</h1>
        <div className="noteList">
          {list.map((item) => {
            return (
              <ListComponent key={item.name}
                selectedNote={selectedNote}
                setSelectedNote={setSelectedNote}
                item={item}
                setNoteSelected={setNoteSelected}
              />
            );
          })}
        </div>
    </div>
  );
}

export default NoteList;
