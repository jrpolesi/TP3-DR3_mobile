import { Text, View } from "react-native";

export function TodoItem({ title }) {
  return (
    <View>
      <Text>- {title}</Text>
    </View>
  );
}
