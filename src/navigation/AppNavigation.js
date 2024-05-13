import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import { AccountStack } from "./AccountStack";
import { FavoritesStack } from "./FavoritesStack";
import { PubStack } from "./PubStack";
import { RankingStack } from "./RankingStack";
import { SearchStack } from "./SearchStack";

import { screen } from "../utils";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#FF4D4D",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => iconOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.pub.tab}
        component={PubStack}
        options={{ title: "Bares" }}
      />
      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoritesStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingStack}
        options={{ title: "Ranking" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

function iconOptions(route, color, size) {
  let iconName;

  if (route.name === screen.account.tab) {
    iconName = "home";
  }

  if (route.name === screen.pub.tab) {
    iconName = "glass-mug-variant";
  }

  if (route.name === screen.favorites.tab) {
    iconName = "heart-outline";
  }

  if (route.name === screen.ranking.tab) {
    iconName = "star-half-full";
  }

  if (route.name === screen.search.tab) {
    iconName = "store-search-outline";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
