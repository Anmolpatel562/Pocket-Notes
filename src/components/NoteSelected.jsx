import "./NoteSelected.css";
import { React, useState,useEffect } from "react";

export default function NoteSelected({selectedNote,listArray,setListArray}) {
  let profileName = selectedNote.name.trim().split(" ");

  let permit = true;

  const [value, setValue] = useState("");

  const textHandler = (e) => {
    setValue(e.target.value);
  };

  const sendHandler = () => {

    let obj = {
      note:value,
      time:"10:50",
      date:"1/1/24"
    }
    
    listArray.map((item)=>{
      if(item.name === selectedNote.name){
        setListArray((prev)=>[...prev,item.text.push(obj)]);

        let prevData = JSON.parse(localStorage.getItem(item.name));
        console.log("prevData",prevData)
        let updatedData = prevData?[...prevData,item.text[item.text.length-1]]:item.text;
        console.log("updatedData",updatedData);
        let JSONCurrentText = JSON.stringify(updatedData);
        localStorage.setItem(item.name,JSONCurrentText);
      }
    })
    setValue("");
  };



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

      <div className="noteFooter">
        <textarea
          className="textarea"
          placeholder="Enter your text here..........."
          onChange={textHandler}
          value={value}
        ></textarea>
        <button onClick={sendHandler}>Click Me</button>
        <button >show</button>
      </div>
    </div>
  );
}
