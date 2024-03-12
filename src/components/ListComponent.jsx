import React from "react";
import "./ListComponent.css";

export default function ListComponent({
  item,
  selectedNote,
  setSelectedNote,
  setNoteSelected,
}) {
  let profileName = item.name.trim().split(" ");

  return (
    <div
      className="nameIcon"
      key={item.name}
      onClick={() => {
        setSelectedNote(item);
        setNoteSelected(true);
      }}
      style={selectedNote&&selectedNote.name==item.name?{backgroundColor:"#2F2F2F2B",borderRadius:"10px"}:null}
    >
      <div className="profileIcon" style={{ backgroundColor: item.color }}>
        {profileName[0].charAt(0).toUpperCase()}
        {profileName[1].charAt(0).toUpperCase()}
      </div>
      <span>{item.name}</span>
    </div>
  );
}
