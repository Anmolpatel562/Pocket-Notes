import "./App.css";
import NoteList from "./components/NoteList";
import NoteNoteSelected from "./components/NoteNoteSelected";
import Lock from "./image/lock.png";
import Media from "react-media";

function App() {
  return (
    <div className="App">
      <Media query="(max-width:450px)">
        {(matches) => {
          return matches ? (
            <NoteList />
          ):(<>
              <NoteList/>
              <div className="noteScreen">
                <NoteNoteSelected />
                <div className="security">
                  <img className="lockImg" src={Lock}></img>
                  <p>end-to-end encrypted</p>
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
