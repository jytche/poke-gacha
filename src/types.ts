export interface PokemonCard {
  id: string;
  name: string;
  rarity: string;
  images: {
    small: string;
  };
}

export interface BoosterCard {
  id: string;
  name: string;
  rarity: string;
  image: string;
}

export interface PokemonCardMini {
  id: string;
  name: string;
  images: {
    logo: string;
  };
}

export interface FetchPokemonSetProps {
  onUserInputChange: (input: string) => void;
}
