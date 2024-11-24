export const fetchSet = async () => {
  try {
    const response = await fetch(`https://api.pokemontcg.io/v2/sets/`);
    if (!response.ok) {
      throw new Error('Failed to reach Pokemon Data');
    }
    const data = await response.json();
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.error('Error fetching Pokemon: data:', error);
  }
};
