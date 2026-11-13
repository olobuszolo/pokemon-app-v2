import { apiGet } from '../client';
import type { EvolutionChain, Pokemon, PokemonListResponse, PokemonSpecies } from './types';

/** Paginated list of Pokémon (name + url only). */
export function getPokemonList(limit = 20, offset = 0) {
  return apiGet<PokemonListResponse>(`/pokemon?limit=${limit}&offset=${offset}`);
}

/** Full details of a single Pokémon, by id or name. */
export function getPokemon(idOrName: number | string) {
  return apiGet<Pokemon>(`/pokemon/${idOrName}`);
}

/** Species info (description, genus, evolution chain id), by id or name. */
export function getPokemonSpecies(idOrName: number | string) {
  return apiGet<PokemonSpecies>(`/pokemon-species/${idOrName}`);
}

/** Evolution chain by id. */
export function getEvolutionChain(id: number) {
  return apiGet<EvolutionChain>(`/evolution-chain/${id}`);
}
