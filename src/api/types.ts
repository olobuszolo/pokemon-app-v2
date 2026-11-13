/** Reference to another PokeAPI resource. */
export type NamedResource = {
  name: string;
  url: string;
};

export type PaginatedResponse<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};
