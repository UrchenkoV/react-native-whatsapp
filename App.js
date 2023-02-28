import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "./constants";
import Login from "./src/screens/Login";
import { AuthProvider, useAuth } from "./src/useAuth";
import Navigation from "./src/Navigation";

export default function App() {
  const { user } = useAuth();

  return (
    <LinearGradient
      colors={["#14493e", "#212121"]}
      start={{ x: 1.1, y: 0.9 }}
      style={styles.container}
    >
      {user ? <Navigation /> : <Login />}
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BG,
    paddingTop: 50,
  },
});
