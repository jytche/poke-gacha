import { useState, useEffect } from 'react';
import { fetchSet } from './fetch-set';
import { PokemonCardMini, FetchPokemonSetProps } from './types';

export function FetchPokemonSet({ onUserInputChange }: FetchPokemonSetProps) {
  const [pokemonSet, setPokemonSet] = useState<
    { id: string; name: string; setImage: string }[]
  >([]);
  const [userInput, setUserInput] = useState<string>('');

  useEffect(() => {
    fetchSet()
      .then((result) => {
        const formattedData = result.map((set: PokemonCardMini) => ({
          id: set.id,
          name: set.name,
          setImage: set.images.logo,
        }));
        setPokemonSet(formattedData);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon set:', error);
      });
  }, []);

  const handleInputChange = (value: string) => {
    setUserInput(value);
    onUserInputChange(value);
  };

  return (
    <div>
      <select
        className="flex gap-2 text-black"
        name="set"
        id="set"
        onChange={(e) => handleInputChange(e.target.value)}
      >
        <option>Select a set</option>
        {pokemonSet.map((set) => (
          <option key={set.id} value={set.id}>
            {set.name}
          </option>
        ))}
      </select>
    </div>
  );
}
