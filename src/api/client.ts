const BASE_URL = 'https://pokeapi.co/api/v2';

/** Fetches JSON from a PokeAPI path, e.g. `/pokemon/1`. */
export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status} (${path})`);
  }

  return response.json();
}
