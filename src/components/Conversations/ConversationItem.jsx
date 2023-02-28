import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import BaseSmallAvatar from "../BaseSmallAvatar";
import { colors } from "../../../constants";
import { useNavigation } from "@react-navigation/native";

export default function ConversationItem({
  id,
  name,
  image,
  comment,
  time,
  newComment = 0,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <TouchableOpacity>
        <BaseSmallAvatar image={image} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.wrap}
        onPress={() => navigation.navigate("Conversation", { userId: id })}
      >
        <View style={styles.contentWrap}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.comment}>{comment}</Text>
        </View>
        <View style={styles.rightAreaWrap}>
          <Text style={styles.time}>{time}</Text>
          {Boolean(newComment) && (
            <View style={styles.newCommentWrap}>
              <Text style={styles.newComment}>{newComment}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  wrap: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 15,
  },
  contentWrap: {},
  name: {
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
  comment: {
    color: colors.GRAY,
    fontSize: 15,
  },
  rightAreaWrap: {
    marginLeft: "auto",
    alignItems: "flex-end",
  },
  time: {
    color: colors.GRAY,
    fontSize: 15,
  },
  newCommentWrap: {
    backgroundColor: colors.RED_700,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 5,
  },
  newComment: {
    color: colors.WHITE,
    fontSize: 15,
    fontWeight: "500",
  },
});
