import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { useQueryProposicoes } from "./hooks/useQueryProposicoes";
import { ActiveDemocracy } from "./screens/ActiveDemocracy";
import { Home } from "./screens/Home";

const DrawerNav = createDrawerNavigator();

export default function App() {
  const [userOpinion, setUserOpinion] = useState([]);

  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    refreshData,
    isRefreshing,
  } = useQueryProposicoes();

  function onUserOpinion(proposicao, opinion) {
    setUserOpinion((prev) => {
      const oldOpinion = prev.find((u) => u.proposicao.id === proposicao.id);
      if (oldOpinion) {
        return prev.map((u) =>
          u.proposicao.id === proposicao.id ? { ...u, opinion } : u
        );
      }
      return [{ proposicao, opinion }, ...prev];
    });
  }

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
        <DrawerNav.Screen
          name="ActiveDemocracy"
          options={{ title: "Democracia Ativa" }}
        >
          {(props) => (
            <ActiveDemocracy
              {...props}
              data={data.map((d) => ({
                ...d,
                opinion: userOpinion.find((u) => u.proposicao.id === d.id)
                  ?.opinion,
              }))}
              isLoading={isLoading}
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
              refreshData={refreshData}
              isRefreshing={isRefreshing}
              onUserOpinion={onUserOpinion}
            />
          )}
        </DrawerNav.Screen>
      </DrawerNav.Navigator>
    </NavigationContainer>
  );
}
