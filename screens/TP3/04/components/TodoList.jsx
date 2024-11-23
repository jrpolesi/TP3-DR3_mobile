import { SectionList, StyleSheet, Text } from "react-native";
import { TodoItem } from "./TodoItem.jsx";

export function TodoList({ todos }) {
  return (
    <SectionList
      sections={todos}
      renderItem={({ item }) => <TodoItem title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
      keyExtractor={(item) => item}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
