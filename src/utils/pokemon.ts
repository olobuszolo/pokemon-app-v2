/** Extracts the id from a PokeAPI url, e.g. ".../pokemon/25/" -> 25. */
export function getPokemonIdFromUrl(url: string) {
  const parts = url.split("/").filter(Boolean);
  return Number(parts[parts.length - 1]);
}

/** Sprite image for a Pokémon id. */
export function getPokemonImageUrl(id: number) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}
