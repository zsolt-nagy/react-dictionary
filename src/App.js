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
  // const [score, setScore] = useState(0);

  const addWord = (front, back) => {
    const newWords = [...words, { front, back }];
    setWords(newWords);
  }

  const deleteWord = (front) => {
    const newWords = words.filter(word => word.front !== front);
    setWords(newWords);
  }

  return (
    <div className="App">
      <header className="App-header">
        Dictionary App
      </header>
      <main>
        <WordForm addWord={addWord} />
        <CardsContainer words={words} deleteWord={deleteWord} />
      </main>
    </div>
  );
}

export default App;
