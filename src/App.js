import './App.css';
import WordCard from './components/WordCard/WordCard';

function App() {
  const words = [
    { front: 'translation', back: 'Übersetzung' },
    { front: 'egg', back: 'Ei' },
    { front: 'taxi', back: 'Taxi' },
    { front: 'paper', back: 'Papier' },
    { front: 'square' , back: 'Platz' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        Dictionary App
      </header>
      <main className="cards-container">
        <WordCard front={words[0].front} back={words[0].back} />
        <WordCard front={words[1].front} back={words[1].back}  />
        <WordCard front={words[2].front} back={words[2].back}  />
        <WordCard front={words[3].front} back={words[3].back}  />
        <WordCard front={words[4].front} back={words[4].back}  />
      </main>
    </div>
  );
}

export default App;
