import { ActivityIndicator, Button, FlatList, Text, View } from "react-native";

import { PokemonRow } from "@/components/PokemonRow";
import { usePokemonList } from "@/hooks/usePokemonList";

export default function PokemonListScreen() {
  const { pokemons, isLoading, error, loadMore } = usePokemonList();

  return (
    <FlatList
      data={pokemons}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => <PokemonRow name={item.name} url={item.url} />}
      onEndReached={error ? undefined : loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        <View style={{ padding: 16 }}>
          {isLoading && <ActivityIndicator />}
          {error && (
            <>
              <Text style={{ textAlign: "center" }}>{error}</Text>
              <Button title="Retry" onPress={loadMore} />
            </>
          )}
        </View>
      }
    />
  );
}
