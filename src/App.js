import { useState } from 'react';

import WordForm from './components/WordForm/WordForm';
import CardsContainer from './components/CardsContainer/CardsContainer';

import './App.css';


function App() {
  const [words, setWords] = useState([
    { front: 'translation', back: 'Übersetzung' },
    { front: 'egg', back: 'Ei' },
    { front: 'taxi', back: 'Taxi' },
    { front: 'paper', back: 'Papier' },
    { front: 'square' , back: 'Platz' },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        Dictionary App
      </header>
      <main>
        <WordForm />
        <CardsContainer words={words} />
      </main>
    </div>
  );
}

export default App;
