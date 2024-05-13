import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PubsScreen } from "../screens/Pubs/PubsScreen";
import { AddPubScreen } from "../screens/Pubs/AddPubScreen";
import { PubScreen } from "../screens/Pubs/PubScreen";
import { AddReviewPubScreen } from "../screens/Pubs/AddReviewPubScreen";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function PubStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.pub.pubs}
        component={PubsScreen}
        options={{ title: "Bares" }}
      />
      <Stack.Screen
        name={screen.pub.addPub}
        component={AddPubScreen}
        options={{ title: "Nuevo Bar" }}
      />
      <Stack.Screen
        name={screen.pub.pub}
        component={PubScreen}
        options={{ title: "Bar" }}
      />
      <Stack.Screen
        name={screen.pub.addReviewPub}
        component={AddReviewPubScreen}
        options={{ title: "Nueva opinión" }}
      />
    </Stack.Navigator>
  );
}
