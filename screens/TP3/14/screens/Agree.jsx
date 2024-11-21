import { StyleSheet, Text, View } from "react-native";
import { ProposicoesList } from "../components/ProposicoesList";

export function Agree({ data }) {
  return (
    <View style={styles.container}>
      {data.length ? (
        <ProposicoesList data={data} />
      ) : (
        <Text style={styles.text}>
          Parece que você não concordou com nada ainda
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 30,
    marginVertical: 20,
  },
});
