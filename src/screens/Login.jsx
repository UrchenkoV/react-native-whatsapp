import React from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";
import { colors } from "../../constants";
import { useAuth } from "../useAuth";

export default function Login() {
  const { onLogin, isLoading, error } = useAuth();

  const [email, setEmail] = React.useState("vlad@mail.ru");
  const [password, setPassword] = React.useState("123456");

  return (
    <View style={styles.root}>
      {error && (
        <View style={styles.alert}>
          <Text style={styles.alertText}>{error}</Text>
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder="Почта"
        onChangeText={(val) => setEmail(val)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        onChangeText={(val) => setPassword(val)}
        value={password}
        secureTextEntry={true}
      />
      <Button
        title="Войти"
        onPress={() => onLogin({ email, password })}
        disabled={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, justifyContent: "center", paddingHorizontal: 25 },
  input: {
    fontSize: 18,
    padding: 15,
    backgroundColor: colors.GRAY_FROM,
    color: colors.WHITE,
    borderColor: colors.WHITE,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  btn: {
    padding: 20,
  },
  alert: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: colors.RED_100,
    marginBottom: 20,
    borderRadius: 5,
  },
  alertText: {
    color: colors.RED_900,
    fontSize: 16,
  },
});
