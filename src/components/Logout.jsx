import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../constants";
import { useAuth } from "../useAuth";

export default function Logout() {
  const { logout } = useAuth();

  return (
    <TouchableOpacity onPress={logout}>
      <AntDesign name="logout" size={23} color={colors.WHITE} />
    </TouchableOpacity>
  );
}
