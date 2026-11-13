import type { NamedResource, PaginatedResponse } from '../types';

export type PokemonListResponse = PaginatedResponse<NamedResource>;

export type PokemonAbility = {
  is_hidden: boolean;
  slot: number;
  ability: NamedResource;
};

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: NamedResource;
};

export type PokemonType = {
  slot: number;
  type: NamedResource;
};

export type PokemonSprites = {
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  other?: {
    'official-artwork'?: {
      front_default: string | null;
      front_shiny: string | null;
    };
  };
};

export type PokemonMove = {
  move: NamedResource;
};

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number | null;
  height: number;
  weight: number;
  order: number;
  is_default: boolean;
  abilities: PokemonAbility[];
  stats: PokemonStat[];
  types: PokemonType[];
  moves: PokemonMove[];
  sprites: PokemonSprites;
  species: NamedResource;
};

export type FlavorTextEntry = {
  flavor_text: string;
  language: NamedResource;
  version: NamedResource;
};

export type Genus = {
  genus: string;
  language: NamedResource;
};

export type PokemonSpecies = {
  id: number;
  name: string;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  color: NamedResource;
  habitat: NamedResource | null;
  generation: NamedResource;
  evolves_from_species: NamedResource | null;
  evolution_chain: { url: string };
  flavor_text_entries: FlavorTextEntry[];
  genera: Genus[];
};

export type ChainLink = {
  species: NamedResource;
  evolves_to: ChainLink[];
};

export type EvolutionChain = {
  id: number;
  chain: ChainLink;
};
