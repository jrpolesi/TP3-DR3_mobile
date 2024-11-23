import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useQueryProposicoes } from "./hooks/useQueryProposicoes.jsx";
import { Home } from "./screens/Home.jsx";

const DrawerNav = createDrawerNavigator();

export default function App() {
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    refreshData,
    isRefreshing,
  } = useQueryProposicoes();

  return (
    <NavigationContainer independent={true}>
      <DrawerNav.Navigator>
        <DrawerNav.Screen name="Home">
          {(props) => (
            <Home
              {...props}
              data={data}
              isLoading={isLoading}
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
              refreshData={refreshData}
              isRefreshing={isRefreshing}
            />
          )}
        </DrawerNav.Screen>
      </DrawerNav.Navigator>
    </NavigationContainer>
  );
}
