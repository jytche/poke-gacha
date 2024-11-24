import { PokemonCard, BoosterCard } from './types';

export const fetchPokemonData = async (
  selectedSet: string
): Promise<BoosterCard[] | null> => {
  try {
    const response = await fetch(
      `https://api.pokemontcg.io/v2/cards?q=set.id:${selectedSet}`
    );
    if (!response.ok) {
      throw new Error('failed to fetch Pokemon data');
    }
    const data = await response.json();
    const formattedData = data.data.map((card: PokemonCard) => ({
      id: card.id,
      name: card.name,
      rarity: card.rarity,
      image: card.images.small,
    }));
    console.log('Formatted Data', formattedData);
    return formattedData;
  } catch (error) {
    console.error('Error fetching Pokemon: data:', error);
    return null;
  }
};
