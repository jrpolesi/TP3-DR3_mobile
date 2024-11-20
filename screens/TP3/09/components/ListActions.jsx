import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const SORT_VALUES = {
  none: "none",
  nameAsc: "name_asc",
  nameDesc: "name_desc",
  priceAsc: "price_asc",
  priceDesc: "price_desc",
};

const SORT_OPTIONS = [
  { label: "Nenhum", value: SORT_VALUES.none },
  { label: "Nome (A-Z)", value: SORT_VALUES.nameAsc },
  { label: "Nome (Z-A)", value: SORT_VALUES.nameDesc },
  { label: "Preço (Menor)", value: SORT_VALUES.priceAsc },
  { label: "Preço (Maior)", value: SORT_VALUES.priceDesc },
];

export function ListActions({ filter, onChangeFilter, sort, onChangeSort }) {
  const [value, setValue] = useState(filter);

  return (
    <View style={styles.container}>
      <View>
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
        <Picker
          selectedValue={sort}
          onValueChange={(itemValue) => onChangeSort(itemValue)}
          mode="dropdown"
        >
          {SORT_OPTIONS.map(({ label, value }) => (
            <Picker.Item key={value} label={label} value={value} />
          ))}
        </Picker>
      </View>
      <View>
        {filter && (
          <Text style={styles.displayText}>Filtrado por: {filter}</Text>
        )}
        {sort && (
          <Text style={styles.displayText}>
            Ordenado por:{" "}
            {SORT_OPTIONS.find(({ value }) => value === sort).label}
          </Text>
        )}
      </View>
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
