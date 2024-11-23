import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ActiveDemocracyList } from "./ActiveDemocracyList.jsx";
import { Agree } from "./Agree.jsx";
import { Disagree } from "./Disagree.jsx";

const bottomTabNav = createBottomTabNavigator();

export function ActiveDemocracy({
  data,
  isLoading,
  fetchNextPage,
  hasNextPage,
  refreshData,
  isRefreshing,
  onUserOpinion,
}) {
  return (
    <NavigationContainer independent={true}>
      <bottomTabNav.Navigator>
        <bottomTabNav.Screen
          name="ActiveDemocracy"
          options={{
            title: "Democracia Ativa",
            headerShown: false,
            tabBarIcon: () => <Icon name="gavel" size={24} />,
          }}
        >
          {(props) => (
            <ActiveDemocracyList
              {...props}
              data={data}
              isLoading={isLoading}
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
              refreshData={refreshData}
              isRefreshing={isRefreshing}
              onUserOpinion={onUserOpinion}
            />
          )}
        </bottomTabNav.Screen>

        <bottomTabNav.Screen
          name="Agree"
          options={{
            title: "Concordo",
            headerShown: false,
            tabBarIcon: () => <Icon name="thumbs-up" size={24} />,
          }}
        >
          {(props) => (
            <Agree
              {...props}
              data={data.filter((item) => item.opinion === true)}
            />
          )}
        </bottomTabNav.Screen>
        <bottomTabNav.Screen
          name="Disagree"
          options={{
            title: "Discordo",
            headerShown: false,
            tabBarIcon: () => <Icon name="thumbs-down" size={24} />,
          }}
        >
          {(props) => (
            <Disagree
              {...props}
              data={data.filter((item) => item.opinion === false)}
            />
          )}
        </bottomTabNav.Screen>
      </bottomTabNav.Navigator>
    </NavigationContainer>
  );
}
