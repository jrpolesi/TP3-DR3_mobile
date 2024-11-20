import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export function TextFilter({ filter, onChangeFilter }) {
  const [value, setValue] = useState(filter);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={(value) => setValue(() => value.trimStart())}
          placeholder="Buscar..."
          style={styles.input}
        />

        <Icon.Button
          name="search"
          size={24}
          iconStyle={{
            marginRight: 4,
            marginHorizontal: 4,
          }}
          borderRadius={0}
          onPress={() => {
            onChangeFilter(value);

            setValue("");
          }}
        />
      </View>
      {filter && <Text style={styles.displayText}>Filtrado por: {filter}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    marginBottom: 0,
    gap: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    borderRadius: 8,
    overflow: "hidden",
  },
  input: {
    flex: 1,
    padding: 8,
    backgroundColor: "#ebebeb",
    border: "none",
  },
  displayText: {
    color: "#888",
  },
});
