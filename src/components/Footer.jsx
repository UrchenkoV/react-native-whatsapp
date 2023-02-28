import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Footer() {
  const route = useRoute();
  const navigation = useNavigation();

  const checkActive = (routeName) =>
    routeName === route.name ? colors.ASPECT : colors.GRAY;

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <AntDesign name="home" size={30} color={checkActive("Home")} />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="phone" size={30} color={checkActive("Phone")} />
      </TouchableOpacity>
      <TouchableOpacity>
        <LinearGradient
          colors={[colors.ASPECT, colors.ASPECT_TO]}
          style={styles.plus}
        >
          <AntDesign name="plus" size={28} color={colors.WHITE} />
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="camera" size={30} color={checkActive("Photo")} />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="user" size={30} color={checkActive("Profile")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.DARK,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  plus: {
    backgroundColor: colors.ASPECT,
    borderRadius: 50,
    padding: 15,
  },
});
