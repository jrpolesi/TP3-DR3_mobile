import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export function Question({ title, options, correct, userAnswer, onAnswer }) {
  const isAnswered = !!userAnswer;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={options}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => {
          let textColor = "unset";

          if (item === correct && isAnswered) {
            textColor = "green";
          } else if (item !== correct && isAnswered) {
            textColor = "red";
          }

          return (
            <TouchableOpacity
              style={styles.option}
              onPress={() => onAnswer(item)}
              disabled={isAnswered}
            >
              <View
                style={{
                  ...styles.radio,
                  backgroundColor: userAnswer === item ? "blue" : "unset",
                }}
              />
              <Text style={{ ...styles.optionLabel, color: textColor }}>
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  title: {
    fontSize: 22,
  },
  option: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  radio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
  },
  optionLabel: {
    fontSize: 18,
  },
});
