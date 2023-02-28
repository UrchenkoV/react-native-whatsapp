import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../constants";

export default function MessageInput({ sendMessage }) {
  const [message, setMessage] = React.useState("");

  const onSend = () => {
    sendMessage(message);
    setMessage("");
  };

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        placeholder="Сообщение..."
        placeholderTextColor={colors.GRAY}
        onChangeText={(mes) => setMessage(mes)}
        value={message}
        multiline={true}
      />
      <TouchableOpacity style={styles.send} onPress={onSend}>
        <Feather name="send" size={24} color={colors.ASPECT} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
  },
  input: {
    color: colors.GRAY,
    backgroundColor: colors.DARK,
    fontSize: 16,
    paddingVertical: 15,
    paddingLeft: 15,
    paddingRight: 50,
    borderRadius: 20,
  },
  send: {
    position: "absolute",
    right: 15,
  },
});
