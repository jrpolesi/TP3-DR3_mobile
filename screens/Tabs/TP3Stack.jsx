import { createStackNavigator } from "@react-navigation/stack";
import TP3_01 from "../TP3/01/index.jsx";
import TP3_02 from "../TP3/02/index.jsx";
import TP3_03 from "../TP3/03/index.jsx";
import TP3_04 from "../TP3/04/index.jsx";
import TP3_05 from "../TP3/05/index.jsx";
import TP3_06 from "../TP3/06/index.jsx";
import TP3_07 from "../TP3/07/index.jsx";
import TP3_08 from "../TP3/08/index.jsx";
import TP3_09 from "../TP3/09/index.jsx";
import TP3_10 from "../TP3/10/index.jsx";
import TP3_11 from "../TP3/11/index.jsx";
import TP3_12 from "../TP3/12/index.jsx";
import TP3_13 from "../TP3/13/index.jsx";
import TP3_14 from "../TP3/14/index.jsx";
import TP3_15 from "../TP3/15/index.jsx";
import TP3_16 from "../TP3/16/index.jsx";
import TP3 from "../TP3/index.jsx";

const Stack = createStackNavigator();

export default function TP3Stack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TP3" component={TP3} />
      <Stack.Screen name="TP3 - 1" component={TP3_01} />
      <Stack.Screen name="TP3 - 2" component={TP3_02} />
      <Stack.Screen name="TP3 - 3" component={TP3_03} />
      <Stack.Screen name="TP3 - 4" component={TP3_04} />
      <Stack.Screen name="TP3 - 5" component={TP3_05} />
      <Stack.Screen name="TP3 - 6" component={TP3_06} />
      <Stack.Screen name="TP3 - 7" component={TP3_07} />
      <Stack.Screen name="TP3 - 8" component={TP3_08} />
      <Stack.Screen name="TP3 - 9" component={TP3_09} />
      <Stack.Screen name="TP3 - 10" component={TP3_10} />
      <Stack.Screen name="TP3 - 11" component={TP3_11} />
      <Stack.Screen name="TP3 - 12" component={TP3_12} />
      <Stack.Screen name="TP3 - 13" component={TP3_13} />
      <Stack.Screen name="TP3 - 14" component={TP3_14} />
      <Stack.Screen name="TP3 - 15" component={TP3_15} />
      <Stack.Screen name="TP3 - 16" component={TP3_16} />
    </Stack.Navigator>
  );
}
