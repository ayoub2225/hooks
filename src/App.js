import { useState } from 'react';
import './App.css';
import MoviesListe from './components/MoviesListe';
import Nav from './components/Nav';

function App() {
  const [filterTitle, setFilterTitle] = useState("")
  const [filterRating, setFilterRating] = useState(0)
  return (
    <div className="App">
      <Nav
        setFilterRating={setFilterRating}
        filterRating={filterRating}
        setFilterTitle={setFilterTitle}
      />
      <MoviesListe filterRating={filterRating} filterTitle={filterTitle} />
    </div>
  );
}

export default App;
