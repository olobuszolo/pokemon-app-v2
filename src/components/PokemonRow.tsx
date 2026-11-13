import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

import { getPokemonIdFromUrl, getPokemonImageUrl } from '@/utils/pokemon';

type Props = {
  name: string;
  url: string;
};

export function PokemonRow({ name, url }: Props) {
  const id = getPokemonIdFromUrl(url);

  return (
    <View style={styles.row}>
      <Text style={styles.name}>{name}</Text>
      <Image source={{ uri: getPokemonImageUrl(id) }} style={styles.image} contentFit="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(128, 128, 128, 0.4)',
  },
  name: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
  image: {
    width: 72,
    height: 72,
  },
});
