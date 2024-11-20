import { StyleSheet, Text, View } from "react-native";

export function TodoItem({ title }) {
  return (
    <View style={styles.container}>
      <Text>- {title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    backgroundColor: "lightblue",
  },
});
