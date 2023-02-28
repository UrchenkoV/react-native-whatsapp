import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ConversationScreen from "./screens/ConversationScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer theme={{ colors: { background: "transparent" } }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Conversation" component={ConversationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
