import { View } from "react-native";
import { TodoList } from "./components/TodoList";

const TODO_LIST = [
  "Estudar React Native",
  "Estudar JavaScript",
  "Estudar React",
  "Estudar Node.js",
  "Estudar MongoDB",
];

export default function App() {
  return (
    <View>
      <TodoList todos={TODO_LIST} />
    </View>
  );
}
