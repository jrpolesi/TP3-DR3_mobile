import { StyleSheet, Text, View } from "react-native";

export function Proposicao({ proposicao }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {proposicao.siglaTipo} {proposicao.numero}/{proposicao.ano}
      </Text>
      <Text style={styles.ementa}>{proposicao.ementa}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  ementa: {
    fontSize: 16,
    color: "#333",
  },
});
