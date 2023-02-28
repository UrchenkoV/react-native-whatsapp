import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../../constants";

export default function BaseSmallAvatar({ name, image }) {
  return (
    <View style={styles.root}>
      <View style={styles.imageWrap}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      {name && <Text style={styles.name}>{name}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  imageWrap: {
    padding: 4,
    borderWidth: 2,
    borderColor: colors.ASPECT,
    borderStyle: "solid",
    borderRadius: 50,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  name: {
    color: colors.WHITE,
    fontSize: 15,
    marginTop: 5,
  },
});
