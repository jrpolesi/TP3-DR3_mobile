import { View } from "react-native";
import { TodoList } from "./components/TodoList.jsx";

const TODO_LIST = [
  {
    title: "Estudos",
    data: ["Estudar React Native", "Estudar JavaScript", "Estudar React"],
  },
  {
    title: "Trabalho",
    data: ["Reunião com o time", "Fazer relatório", "Enviar e-mails"],
  },
  {
    title: "Casa",
    data: ["Lavar a louça", "Limpar o banheiro", "Arrumar a sala"],
  },
];

export default function App() {
  return (
    <View>
      <TodoList todos={TODO_LIST} />
    </View>
  );
}
