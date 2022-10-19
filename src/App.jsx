import { useEffect, useState } from 'react';
import './App.scss';
import Cards from './components/Cards';

function App() {
  const [notes, setNotes] = useState([]);
  const [value, setValue] = useState('');
  const [theme, setTheme] = useState('App');


  function localStorageChange() {
    localStorage.setItem('notes', JSON.stringify(notes));
  }
  
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if(savedNotes) {
      setNotes(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorageChange()
  }, [notes])

  function search(e) {
    setValue(e.target.value);
  };

  function changeTheme() {
    theme === 'App' ? setTheme('App--dark') : setTheme('App')
  }
  

  return (
    <div className={theme}>
      <div className="container">
        <div className="top">
          <h1>Notes</h1>
          <button onClick={changeTheme}>Toggle mode</button>
        </div>
        <input type="text" id="" onChange={search} value={value} className="search" placeholder='Search...'/>
        <Cards notes={notes.filter((el) => el.text.toLowerCase().includes(value))} setNotes={setNotes}/>
      </div>
    </div>
  );
}

export default App;
