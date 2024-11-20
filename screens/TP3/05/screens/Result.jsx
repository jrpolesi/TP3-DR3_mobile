import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Result({ navigation, route }) {
  const { points, maxPoints } = route.params.result;

  const finishedText = `Você fez ${points} de ${maxPoints} pontos`;

  return (
    <View style={styles.container}>
      <Text style={styles.finishedText}>{finishedText}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Start");
        }}
      >
        <Text style={styles.buttonText}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 40,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  startBtn: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 26,
    marginTop: 40,
    borderRadius: 5,
    alignSelf: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  finishedText: {
    fontSize: 24,
    textAlign: "center",
  },
});
