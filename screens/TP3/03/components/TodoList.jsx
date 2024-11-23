import { FlatList } from "react-native";
import { TodoItem } from "./TodoItem.jsx";

export function TodoList({ todos }) {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoItem title={item} />}
      keyExtractor={(item) => item}
    />
  );
}
