import { fetchPokemonData } from './fetch-pokemon';
import { PokemonCard, BoosterCard } from './types';

export async function OpenBooster(
  selectedSet: string
): Promise<
  { id: string; name: string; rarity: string; image: string }[] | null
> {
  if (!selectedSet) {
    console.error('No set provided');
    return null;
  }

  try {
    const data = await fetchPokemonData(selectedSet);

    if (!data) {
      return null;
    }

    const formattedData = data.map((card: BoosterCard) => ({
      id: card.id,
      name: card.name,
      rarity: card.rarity,
      image: card.image,
    }));

    const randomCards = selectRandomCards(formattedData, 10);
    console.log(randomCards);
    return randomCards; // Return the selected random cards
  } catch (error) {
    console.error('Error fetching booster data:', error);
    return null; // Return null on error
  }
}

function selectRandomCards<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
