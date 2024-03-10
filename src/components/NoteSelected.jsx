import "./NoteSelected.css";
import React from "react";
import ListComponent from "./ListComponent";

export default function NoteSelected({ selectedNote }) {
  let profileName = selectedNote.name.trim().split(" ");
  return (
    <div className="notePanel">
      <div className="noteHeader">
        <div className="profile">
          <div className="icon" style={{ backgroundColor: selectedNote.color }}>
            {profileName[0].charAt(0).toUpperCase()}
            {profileName[1].charAt(0).toUpperCase()}
          </div>
          <span>{selectedNote.name}</span>
        </div>
      </div>
      <div className="noteMain"></div>
      <div className="noteFooter"></div>
    </div>
  );
}
