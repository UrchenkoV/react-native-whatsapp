import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../constants";
import { useAuth } from "../useAuth";
import Logout from "./Logout";

export default function Header() {
  const { user } = useAuth();

  return (
    <View style={styles.root}>
      <View>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={{
              uri: "https://img.icons8.com/color/256/whatsapp--v1.png",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{ marginRight: 15 }}>
          <AntDesign name="search1" size={24} color={colors.WHITE} />
        </TouchableOpacity>
        <Logout />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  logo: { width: 50, height: 50 },
});
