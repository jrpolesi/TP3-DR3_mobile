import { ScrollView } from "react-native";
import { TodoItem } from "./TodoItem.jsx";

export function TodoList({ todos }) {
  return (
    <ScrollView>
      {todos.map((todo, index) => (
        <TodoItem key={index} title={todo} />
      ))}
    </ScrollView>
  );
}
