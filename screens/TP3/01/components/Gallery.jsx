import { Image, ScrollView, View } from "react-native";

export function Gallery() {
  return (
    <View>
      <ScrollView horizontal={true}>
        <Image source={require("../assets/image1.jpg")} />
        <Image source={require("../assets/image2.jpg")} />
      </ScrollView>
    </View>
  );
}
