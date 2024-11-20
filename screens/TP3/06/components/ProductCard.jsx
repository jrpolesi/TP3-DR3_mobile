import { Image, StyleSheet, Text, View } from "react-native";

export function ProductCard({ image, name, price }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    marginVertical: 4,
    marginHorizontal: 26,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 8,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
});
