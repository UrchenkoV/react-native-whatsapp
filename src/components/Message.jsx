import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../constants";
import { useAuth } from "../useAuth";

export default function Message({ message, timestamp, userFrom, userTo }) {
  const { user } = useAuth();
  const isMy = user?.uid === userFrom;
  const time = new Date(timestamp.seconds * 1000).toLocaleTimeString();

  return (
    <View
      style={[
        styles.root,
        isMy
          ? { alignSelf: "flex-end", alignItems: "flex-end" }
          : { alignSelf: "flex-start" },
      ]}
    >
      <View
        style={[
          styles.messageWrap,
          isMy
            ? { backgroundColor: colors.ASPECT }
            : { backgroundColor: colors.DARK },
        ]}
      >
        <Text style={styles.message}>{message}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    marginBottom: 15,
  },
  messageWrap: {
    padding: 15,
    borderRadius: 5,
    marginBottom: 7,
  },
  message: {
    color: colors.WHITE,
    fontSize: 16,
  },
  time: {
    color: colors.GRAY,
    fontSize: 15,
  },
});
