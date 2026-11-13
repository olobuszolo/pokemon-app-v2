import { useCallback, useEffect, useRef, useState } from 'react';

import { getPokemonList } from '@/api/pokemon';
import type { NamedResource } from '@/api/types';

const PAGE_SIZE = 20;

/** Loads Pokémon page by page. Call `loadMore` to fetch the next page. */
export function usePokemonList() {
  const [pokemons, setPokemons] = useState<NamedResource[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const offset = useRef(0);
  const hasMore = useRef(true);
  const isFetching = useRef(false);

  const loadMore = useCallback(async () => {
    if (isFetching.current || !hasMore.current) return;

    isFetching.current = true;
    setIsLoading(true);
    setError(null);

    try {
      const page = await getPokemonList(PAGE_SIZE, offset.current);
      setPokemons((current) => [...current, ...page.results]);
      offset.current += PAGE_SIZE;
      hasMore.current = page.next !== null;
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Something went wrong');
    } finally {
      isFetching.current = false;
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMore();
  }, [loadMore]);

  return { pokemons, isLoading, error, loadMore };
}
