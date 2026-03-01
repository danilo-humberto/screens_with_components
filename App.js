import { NavigationContainer } from "@react-navigation/native";
import Template01 from "./template01";
import Template02 from "./template02";
import Template03 from "./template03";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./homescreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Template01"
          component={Template01}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Template02"
          component={Template02}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Template03"
          component={Template03}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
