import React from "react";
import { View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { colors } from "../../../constants";
import BaseSmallAvatar from "../BaseSmallAvatar";
import StoryAdd from "./StoryAdd";

export default function Stories() {
  const stories = [
    {
      id: 1,
      name: "Владислав",
      image:
        "https://sun9-7.userapi.com/impf/c302410/v302410139/11dc/z6LsI4V7Nqw.jpg?size=1280x960&quality=96&sign=c6b33f51e02231038338f78c6511f001&type=album",
    },
    {
      id: 2,
      name: "Эллина",
      image:
        "https://sun9-35.userapi.com/impg/iKjVmQgkfyqDLaLI84b-yArNZOQTIWXq98bJSQ/ATqzgAujymM.jpg?size=1280x1280&quality=95&sign=cb95e0ca570e82aba08d47b31849f713&type=album",
    },
    {
      id: 3,
      name: "Наталья",
      image:
        "https://sun9-57.userapi.com/impg/c858532/v858532148/b264d/Ik1UhB8Odkc.jpg?size=447x600&quality=96&sign=cc5f6744706aa753809a733abec21665&type=album",
    },
    {
      id: 4,
      name: "Елена",
      image:
        "https://sun9-40.userapi.com/impf/c849036/v849036014/c0334/JI59821zm4U.jpg?size=764x1080&quality=96&sign=13061e250ad46eab1fd74e5ef0cd2aa3&type=album",
    },
    {
      id: 5,
      name: "Владислав",
      image:
        "https://sun9-7.userapi.com/impf/c302410/v302410139/11dc/z6LsI4V7Nqw.jpg?size=1280x960&quality=96&sign=c6b33f51e02231038338f78c6511f001&type=album",
    },
    {
      id: 6,
      name: "Эллина",
      image:
        "https://sun9-35.userapi.com/impg/iKjVmQgkfyqDLaLI84b-yArNZOQTIWXq98bJSQ/ATqzgAujymM.jpg?size=1280x1280&quality=95&sign=cb95e0ca570e82aba08d47b31849f713&type=album",
    },
  ];

  return (
    <ScrollView horizontal style={styles.root}>
      <View style={{ marginRight: 10 }}>
        <StoryAdd />
      </View>
      {stories.map((story) => (
        <TouchableOpacity key={story.id} style={{ marginRight: 10 }}>
          <BaseSmallAvatar {...story} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flexGrow: 0,
    flexDirection: "row",
    marginVertical: 30,
    paddingHorizontal: 24,
  },
});
