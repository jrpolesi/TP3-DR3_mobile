import { StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "./ProgressBar.jsx";

export function HeaderWithProgressBar({ current, total }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Question {current}/{total}
      </Text>
      <ProgressBar current={current} total={total} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    gap: 8,
    marginHorizontal: "auto",
    width: "100%",
    maxWidth: 300,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
