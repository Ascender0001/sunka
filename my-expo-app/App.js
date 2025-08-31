import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppProvider, useAppContext } from "./contexts/AppContext";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MainNavigator() {
  const { state } = useAppContext();

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "Home") {
        iconName = focused ? "home" : "home-outline";
      } else if (route.name === "Profile") {
        iconName = focused ? "person" : "person-outline";
      } else if (route.name === "Settings") {
        iconName = focused ? "settings" : "settings-outline";
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "#007AFF",
    tabBarInactiveTintColor: state.theme === "dark" ? "#cccccc" : "gray",
    tabBarStyle: {
      backgroundColor: state.theme === "dark" ? "#121212" : "#ffffff",
      borderTopWidth: 1,
      borderTopColor: state.theme === "dark" ? "#333333" : "#e0e0e0",
    },
    headerStyle: {
      backgroundColor: state.theme === "dark" ? "#1a1a1a" : "#007AFF",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "My Expo App" }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
