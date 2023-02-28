import { collection, onSnapshot } from "firebase/firestore";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors } from "../../../constants";
import { db } from "../../utils/firebase";
import ConversationItem from "./ConversationItem";

export default function Conversations() {
  const conversations = [
    {
      id: 1,
      name: "Владислав",
      image:
        "https://sun9-7.userapi.com/impf/c302410/v302410139/11dc/z6LsI4V7Nqw.jpg?size=1280x960&quality=96&sign=c6b33f51e02231038338f78c6511f001&type=album",
      comment: "Солнечный денёк.",
      time: "18.09",
      newComment: 3,
    },
    {
      id: 2,
      name: "Эллина",
      image:
        "https://sun9-35.userapi.com/impg/iKjVmQgkfyqDLaLI84b-yArNZOQTIWXq98bJSQ/ATqzgAujymM.jpg?size=1280x1280&quality=95&sign=cb95e0ca570e82aba08d47b31849f713&type=album",
      comment: "Ветер на улице.",
      time: "07.15",
      newComment: 0,
    },
    {
      id: 3,
      name: "Наталья",
      image:
        "https://sun9-57.userapi.com/impg/c858532/v858532148/b264d/Ik1UhB8Odkc.jpg?size=447x600&quality=96&sign=cc5f6744706aa753809a733abec21665&type=album",
      comment: "Доброе утро.",
      time: "09,23",
      newComment: 0,
    },
    {
      id: 4,
      name: "Елена",
      image:
        "https://sun9-40.userapi.com/impf/c849036/v849036014/c0334/JI59821zm4U.jpg?size=764x1080&quality=96&sign=13061e250ad46eab1fd74e5ef0cd2aa3&type=album",
      comment: "Как погода?",
      time: "17,13",
      newComment: 5,
    },
    {
      id: 5,
      name: "Владислав",
      image:
        "https://sun9-7.userapi.com/impf/c302410/v302410139/11dc/z6LsI4V7Nqw.jpg?size=1280x960&quality=96&sign=c6b33f51e02231038338f78c6511f001&type=album",
      comment: "Как дела?",
      time: "23.15",
      newComment: 0,
    },
    {
      id: 7,
      name: "Наталья",
      image:
        "https://sun9-57.userapi.com/impg/c858532/v858532148/b264d/Ik1UhB8Odkc.jpg?size=447x600&quality=96&sign=cc5f6744706aa753809a733abec21665&type=album",
      comment: "Доброе утро.",
      time: "09,23",
      newComment: 4,
    },
    {
      id: 8,
      name: "Елена",
      image:
        "https://sun9-40.userapi.com/impf/c849036/v849036014/c0334/JI59821zm4U.jpg?size=764x1080&quality=96&sign=13061e250ad46eab1fd74e5ef0cd2aa3&type=album",
      comment: "Как погода?",
      time: "17,13",
      newComment: 0,
    },
    {
      id: 9,
      name: "Владислав",
      image:
        "https://sun9-7.userapi.com/impf/c302410/v302410139/11dc/z6LsI4V7Nqw.jpg?size=1280x960&quality=96&sign=c6b33f51e02231038338f78c6511f001&type=album",
      comment: "Как дела?",
      time: "23.15",
      newComment: 0,
    },
    {
      id: 6,
      name: "Эллина",
      image:
        "https://sun9-35.userapi.com/impg/iKjVmQgkfyqDLaLI84b-yArNZOQTIWXq98bJSQ/ATqzgAujymM.jpg?size=1280x1280&quality=95&sign=cb95e0ca570e82aba08d47b31849f713&type=album",
      comment: "Привет",
      time: "14.27",
      newComment: 0,
    },
  ];

  const fetchContacts = async () => {
    try {
      // await onSnapshot(collection(db, "users"), (snapshot) => {
      //   console.log(
      //     snapshot.docs,
      //     "users",
      //     snapshot.docs.map((doc) => {
      //       doc.data();
      //     })
      //   );
      // });
    } catch (err) {
      console.warn(err);
    }
  };

  React.useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <View style={styles.root}>
      <ScrollView>
        {conversations.map((obj) => (
          <View key={obj.id}>
            <ConversationItem {...obj} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.BG,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
  },
});
