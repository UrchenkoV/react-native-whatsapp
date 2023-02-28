import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../../constants";

export default function StoryAdd() {
  return (
    <TouchableOpacity style={styles.root}>
      <View style={styles.add}>
        <AntDesign name="plus" size={28} color={colors.WHITE} />
      </View>
      <Text style={styles.title}>Добавить</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  add: {
    width: 62,
    height: 62,
    borderWidth: 2,
    borderColor: colors.WHITE,
    borderStyle: "dashed",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.WHITE,
    fontSize: 15,
    marginTop: 10,
  },
});
