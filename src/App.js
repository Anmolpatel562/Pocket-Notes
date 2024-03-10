import './App.css';
import NoteList from "./components/NoteList";
import NoteNoteSelected  from './components/NoteNoteSelected';
import Lock from './image/lock.png';

function App() {
  return (
    <div className="App">
     <NoteList/>
     <div className='noteScreen'>
       <NoteNoteSelected/>
       <div className='security'>
        <img className='lockImg' src={Lock}></img>
        <p>end-to-end encrypted</p>
        </div>
     </div>
    </div>
  );
}

export default App;
