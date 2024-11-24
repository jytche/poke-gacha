import './App.css';
import { FetchPokemonSet } from './FetchPokemonSet';
import { OpenBooster } from './open-booster';
import { useState } from 'react';

function App() {
  const [selectedSet, setSelectedSet] = useState<string>('');
  const [boosterData, setBoosterData] = useState<
    { id: string; name: string; rarity: string; image: string }[]
  >([]);

  const handleUserInputChange = (input: string) => {
    setSelectedSet(input);
    console.log('User selected set:', input);
  };

  const handleOpenBooster = async () => {
    if (!selectedSet) {
      console.error('No set selected');
      return;
    }

    try {
      const randomCards = await OpenBooster(selectedSet); // Call OpenBooster with the selected set
      if (randomCards) {
        setBoosterData(randomCards); // Update state with fetched and formatted cards
        console.log(randomCards);
      }
    } catch (error) {
      console.error('Failed to open booster:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon TCG Gacha</h1>
        <FetchPokemonSet onUserInputChange={handleUserInputChange} />
        <button
          className="text-xl text-green-400"
          type="button"
          onClick={handleOpenBooster}
        >
          Open Booster
        </button>
        <div className="flex flex-wrap gap-5">
          {boosterData.map((card) => (
            <div key={card.id}>
              <p>Name: {card.name}</p>
              <p>Rarity: {card.rarity}</p>
              <img src={card.image} alt={card.name} />
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
