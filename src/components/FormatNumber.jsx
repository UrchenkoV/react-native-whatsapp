import React from "react";
import { Text } from "react-native";
import { NumericFormat } from "react-number-format";

export default function FormatNumber({ value = 0 }) {
  return (
    <NumericFormat
      value={value}
      allowLeadingZeros
      thousandSeparator=" "
      suffix=" ₽"
      displayType={"text"}
      renderText={(value) => <Text>{value}</Text>}
    />
  );
}
