import "./NoteList.css";
import { useState } from "react";

function NoteList() {
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
    },
  ]);
  return (
    <div>
      <div className="noteListContainer">
        <h1 className="appName">Pocket Notes</h1>
        <div className="noteList">
          {list.map((item) => {
            let profileName = item.name.trim().split(" ");
            return (
              <div className="nameIcon" key={item.name}>
                <div
                  className="profileIcon"
                  style={{ backgroundColor: item.color }}
                >
                  {profileName[0].charAt(0).toUpperCase()}
                  {profileName[1].charAt(0).toUpperCase()}
                </div>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NoteList;
